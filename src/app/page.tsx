"use client";

import { useState } from "react";
import { Box, Button, Heading, Spinner } from "@radix-ui/themes";
import { defaultValidator, formatQuery, QueryBuilder } from "react-querybuilder";
import type { RuleGroupType } from "react-querybuilder";
import { Container } from "react-bootstrap";
import { Card } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { fields } from "./lib/qbuilder/fields";
import { ResultsTable } from "./results";
import Features from "./features";
import "react-querybuilder/dist/query-builder.css";
import "./lib/qbuilder/styles.css";

const initialQuery: RuleGroupType = { combinator: "and", rules: [
  { field: "TransactionType", operator: "=", value: "Payment" },
  { field: "Destination", operator: "=", value: "" },
  // { field: "DestinationTag", operator: "=", value: "" },
] };

const SEARCH_API_ENDPOINT = "/api/v1/search"

export default function Home() {
  const t = useTranslations("Home");
  const [ query, setQuery ] = useState(initialQuery);
  const [ searched, setSearched ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ results, setResults ] = useState({});

  const doQuery = async () => {
    const esQuery = formatQuery(query, { format: "elasticsearch", parseNumbers: true })
    try {
      setLoading(true);
      const res = await fetch(SEARCH_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(esQuery),
      })
      if (!res.ok) {
        setLoading(false);
      } else {
        setResults(await res.json())
        setLoading(false);
        setSearched(true);
      }
    } catch (err) {
      setLoading(false);
      console.error("Error: ", err);
    }
  }

  return (
    <>
      <Container className="py-1">
      <Heading size="5" className="">{t("title")}</Heading>
      <Card variant="classic">
          <QueryBuilder 
            fields={fields}
            query={query}
            onQueryChange={setQuery}
            controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
            parseNumbers="enhanced"
            validator={defaultValidator}
          />

          <Box>
            <Button variant="solid" size="2" mt="4" onClick={doQuery}>
              <Spinner loading={loading}><MagnifyingGlassIcon/></Spinner>
              Search &rarr;
            </Button>
          </Box>
        </Card>
      </Container>

      <Container className="py-3 m-1">
        {!searched &&
          <Features/>
        }
        {searched && !loading &&
          <ResultsTable results={results} />
        }
      </Container>
    </>
  );
}
