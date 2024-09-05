"use client";

import { useState, useEffect } from "react";
import { Box, Button, Callout, Heading, Spinner } from "@radix-ui/themes";
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
import { GlobalNotice } from "./lib/common/GlobalNotice";

const initialQuery: RuleGroupType = { combinator: "and", rules: [
  { field: "TransactionType", operator: "=", value: "Payment" },
  { field: "Destination", operator: "=", value: "" },
  // { field: "DestinationTag", operator: "=", value: "" },
] };

const SEARCH_API_ENDPOINT = "/api/v1/search";
const NAMES_API_ENDPOINT = "https://api.xrpscan.com/api/v1/names/well-known";

export default function Home() {
  const t = useTranslations("Home");
  const [ query, setQuery ] = useState(initialQuery);
  const [ searched, setSearched ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ results, setResults ] = useState({});
  const [ names, setNames ] = useState(new Map());

  // Fetch account names from XRPSCAN Names API and cache
  useEffect(() => {
    const _names = new Map();
    async function fetchNames() {
      const response = await fetch(NAMES_API_ENDPOINT, { cache: "force-cache" });
      const namesJSON = await response.json();
      for (const n of namesJSON) {
        _names.set(n.account, n)
      }
      setNames(_names);
    }
    // Call fetchNames
    fetchNames();
    // Clean up names
    return () => {
      setNames(new Map());
    }
  }, []);

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
      <GlobalNotice/>
      <Heading size="5" className="">{t("title")}</Heading>
      <Card variant="classic">
          <QueryBuilder 
            fields={fields}
            query={query}
            onQueryChange={setQuery}
            controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
            parseNumbers="strict"
            validator={defaultValidator}
          />

          <Box>
            <Button variant="solid" size="2" mt="4" onClick={doQuery} loading={loading}>
              <Spinner loading={loading}><MagnifyingGlassIcon/></Spinner>
              Search &rarr;
            </Button>
          </Box>
        </Card>
      </Container>

      <Container className="pt-3 pb-5 m-1">
        {!searched &&
          <Features/>
        }
        {searched && !loading &&
          <ResultsTable results={results} names={names} />
        }
      </Container>
    </>
  );
}
