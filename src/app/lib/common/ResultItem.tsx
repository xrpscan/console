import { CheckIcon, Cross1Icon, ExclamationTriangleIcon, PieChartIcon, PlusIcon, MinusIcon, IdCardIcon } from "@radix-ui/react-icons";
import { Code, Table } from "@radix-ui/themes";
import TxType from "./TxType";
import DateTag from "./DateTag";
import TxHash from "./TxHash";
import AccountTag from "./AccountTag";
import Money from "./Money";
import { getTxResultStyle } from "./Helpers";

interface ITrustlineTx {
    LimitAmount: {
        value: number,
    }
}

const isTrustlineRemoved = (tx: ITrustlineTx) => {
    return Number(tx?.LimitAmount?.value) === 0 ? true : false
}

export const ResultItemHeader = () => {
    return <Table.Row>
        <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Type</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Date</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">Tx hash</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">From</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">&rarr;</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="left">To</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="end">Amount</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="end"><CheckIcon/></Table.ColumnHeaderCell>
    </Table.Row>;
}

export const ResultItem = (props: any) => {
    const { i, hit, AccountName, DestinationName } = props;
    if (hit?._source) {
        const tx = hit._source;
        return <>
            <Table.Row>
                <Table.RowHeaderCell>{i+1}</Table.RowHeaderCell>
                <Table.Cell align="left">
                    <TxType type={tx.TransactionType}/>
                </Table.Cell>
                <Table.Cell align="left">
                    <DateTag date={tx.date} />
                </Table.Cell>
                <Table.Cell align="left">
                    <TxHash hash={tx.hash} />
                </Table.Cell>
                <Table.Cell align="left">
                    <AccountTag account={tx.Account} link minimal st={tx.SourceTag} name={AccountName}/>
                </Table.Cell>
                <Table.Cell align="left">
                    &rarr;
                </Table.Cell>
                <Table.Cell align="left">
                    {tx.Destination ? <AccountTag account={tx.Destination} link minimal dt={tx.DestinationTag} name={DestinationName}/> : "XRPL" }
                </Table.Cell>
                <Table.Cell align="right">
                    { (tx.meta?.delivered_amount?.value < tx.Amount?.value) &&
                       <><PieChartIcon/>&nbsp;</>
                    }
                    { tx.meta?.delivered_amount?.value &&
                        <Money value={tx.meta.delivered_amount.value} currency={tx.meta.delivered_amount.currency} issuer={tx.meta.delivered_amount.issuer} drops min={6} max={6} />
                    }
                    {!(tx.meta?.delivered_amount?.value) && tx.Amount?.value &&
                        <Money value={tx.Amount.value} currency={tx.Amount.currency} issuer={tx.Amount.issuer} drops min={6} max={6} />
                    }
                    {!(tx.meta?.delivered_amount) && (!tx.Amount) && tx.SendMax &&
                        <Money value={tx.SendMax.value} currency={tx.SendMax.currency} issuer={tx.SendMax.issuer} drops min={6} max={6} />
                    }
                    { tx.TakerGets &&
                        <Money value={tx.TakerGets.value} currency={tx.TakerGets.currency} issuer={tx.TakerGets.issuer} drops min={6} max={6} />
                    }
                    { tx.TransactionType === "TrustSet" && tx.LimitAmount &&
                        <>
                            <Code color={isTrustlineRemoved(tx) ? 'amber' : 'green'}>TRUST {isTrustlineRemoved(tx) ? <MinusIcon/> : <PlusIcon/>}</Code>
                            <Code><Money value={tx.LimitAmount.value} currency={tx.LimitAmount.currency} issuer={tx.LimitAmount.issuer} max={2} /></Code>
                        </>
                    }
                    { tx.TransactionType === "TicketCreate" && tx.TicketCount > 0 &&
                        <>
                            <IdCardIcon/> {tx.TicketCount}
                        </>
                    }
                </Table.Cell>
                <Table.Cell align="right">
                    <span>
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'success' &&
                            <CheckIcon color="green"/>
                        }
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'warning' &&
                            <Cross1Icon color="red"/>
                        }
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'danger' &&
                            <ExclamationTriangleIcon color="red"/>
                        }
                    </span>
                </Table.Cell>
            </Table.Row>
        </>;
    } else {
        return <></>;
    }
}