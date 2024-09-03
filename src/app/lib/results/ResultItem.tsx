import { CheckIcon, Cross1Icon, ExclamationTriangleIcon, PieChartIcon, PlusIcon, MinusIcon, IdCardIcon } from "@radix-ui/react-icons";
import { Code, Table } from "@radix-ui/themes";
import TxType from "../common/TxType";
import DateTag from "../common/DateTag";
import TxHash from "../common/TxHash";
import AccountTag from "../common/AccountTag";
import Money from "../common/Money";
import { formatTransactionResult, getTxResultStyle, isTrustlineRemoved } from "../common/Helpers";

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
                    { tx.TransactionType === "OfferCancel" && tx.OfferSequence >= 0 &&
                        <>
                            <Code variant="soft" color="gray">OFFER SEQ: {tx.OfferSequence}</Code>
                        </>
                    }
                </Table.Cell>
                <Table.Cell align="right">
                    <span>
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'success' &&
                            <><CheckIcon color="green"/></>
                        }
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'warning' &&
                            <><Code variant="outline" color="amber">{formatTransactionResult(tx.meta?.TransactionResult)}</Code></>
                        }
                        {getTxResultStyle(tx.meta?.TransactionResult) === 'danger' &&
                            <><Code variant="outline" color="red"> {formatTransactionResult(tx.meta?.TransactionResult)}</Code></>
                        }
                    </span>
                </Table.Cell>
            </Table.Row>
        </>;
    } else {
        return <></>;
    }
}