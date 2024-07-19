"use client";

import { useEffect, useState } from "react";
import type { RuleGroupType } from "react-querybuilder";
import { QueryBuilder } from "react-querybuilder";
import { fields } from "./fields";
import "react-querybuilder/dist/query-builder.css";
import "./styles.css";

const initialQuery: RuleGroupType = { combinator: "and", rules: [
    { field: "TransactionType", operator: "=", value: "Payment" },
    { field: "Destination", operator: "=", value: "" },
    { field: "DestinationTag", operator: "=", value: "" },
] };

const QBuilder = () => {
    const [query, setQuery ] = useState(initialQuery);

    useEffect(() => {
        console.log(query);
    }, [query])

    return (
        <QueryBuilder 
            fields={fields}
            query={query}
            onQueryChange={setQuery}
            controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
        />
    );
}
export default QBuilder;
