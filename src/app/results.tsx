import { Flex, Table, Callout, Section, Code } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ResultItem, ResultItemHeader } from "./lib/common/ResultItem";
import { Container } from "react-bootstrap";

export const ResultsTable = (props: any) => {
    const results = props.results;
    if (results?.hits?.hits && results?.hits?.hits.length > 0) {
        const hits = results?.hits?.hits;
        const hitsTotalValue = results?.hits?.total?.value;
        const { took, timed_out, _shards } = results;
        return <>
            <ResultStats
                took={took}
                hitsTotalValue={hitsTotalValue}
                _shards={_shards}
            />
            <Table.Root variant="surface">
                <Table.Header>
                    <ResultItemHeader />
                </Table.Header>
                <Table.Body>
                    {hits.map((hit: any, i: number) => (
                        <ResultItem key={i} i={i} hit={hit} />
                    ))}
                </Table.Body>
            </Table.Root>
        </>;
    } else {
        return <>
            <Callout.Root variant="surface" className="pb-0">
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    No matching transactions found. Please refine your query by adding or removing rules and try again.
                </Callout.Text>
            </Callout.Root>
        </>;
    }
}

export const ResultStats = (props: any) => {
    const {
        took,
        hitsTotalValue,
        _shards,
    } = props;

    return <>
        <Container className="pb-2">
            <Flex gap="3">
                <Code variant="soft">MATCHES: {hitsTotalValue >= 10000 ? "10000+" : hitsTotalValue}</Code>
                {took > 0 &&
                <Code variant="soft">TIME: {took}ms</Code>                
                }
                {_shards?.total >= 0 && _shards.successful >= 0 &&
                <Code variant="soft" color="grass">SHARDS: {_shards?.successful}/{_shards.total}</Code>
                }
                {_shards?.total >= 0 && _shards.failed >= 0 &&
                <Code variant="soft" color="gold">FAILED: {_shards?.failed}/{_shards.total}</Code>
                }
            </Flex>
        </Container>
</>;
}