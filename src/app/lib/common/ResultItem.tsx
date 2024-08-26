import { CheckIcon } from "@radix-ui/react-icons";
import { Code, Table } from "@radix-ui/themes";
import TxType from "./TxType";
import DateTag from "./DateTag";
import TxHash from "./TxHash";

export const ResultItemHeader = () => {
    return <>
        <Table.Row>
            <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="left">Tx hash</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">From</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>&rarr;</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>To</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell><CheckIcon/></Table.ColumnHeaderCell>
        </Table.Row>
    </>;
}

export const ResultItem = (props: any) => {
    const { i, hit } = props;
    if (hit?._source) {
        const tx = hit._source;
        return <>
            <Table.Row>
                <Table.Cell>{i+1}</Table.Cell>
                <Table.Cell className="text-uppercase">
                    <TxType type={tx.TransactionType}/>
                </Table.Cell>
                <Table.Cell>
                    <DateTag date={tx.date} />
                </Table.Cell>
                <Table.Cell>
                    <TxHash hash={tx.hash} />
                </Table.Cell>
                <Table.Cell>{tx.Account}</Table.Cell>
            </Table.Row>
        </>;
    } else {
        return <></>;
    }
}