import { Table } from "@radix-ui/themes";

export const ResultItemHeader = () => {
    return <Table.Row>
        <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Type</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Date</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">Tx hash</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">From</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">&rarr;</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">To</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="end">Value</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="end">Result</Table.ColumnHeaderCell>
    </Table.Row>;
}
