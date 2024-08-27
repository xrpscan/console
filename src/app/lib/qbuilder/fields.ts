import type { Field, RuleType } from "react-querybuilder";
import { defaultOperators, toFullOption } from "react-querybuilder";
import { transactionTypes } from "./transaction-types";
import { transactionResults } from "./transaction-results";

export const validator = (r: RuleType) => !!r.value;
const validOperators = (operators: string[]) => {
    return defaultOperators.filter((op) => operators.includes(op.name));
}

const EQUAL_OPERATORS   = ["=", "!="]
const HASH_OPERATORS    = ["=", "!=", "null", "notNull"]
const STRING_OPERATORS  = ["=", "!=", "contains", "null", "notNull"]
const DATE_OPERATORS    = ["=", "!=", "<", ">", "between", "notBetween"]
const NUMERIC_OPERATORS = ["=", "!=", "<", ">", "<=", ">=", "between", "notBetween"]
const ACCOUNT_OPERATORS = ["=", "!=", "contains", "beginsWith", "endsWith", "null", "notNull"]

export const fields = (
  [
    // Most frequently used
    { name: "Account",      label: "Account",       inputType: "string", placeholder: "Enter sending account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "ctid",         label: "ctid",          inputType: "string", placeholder: "Enter CTID",            defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "date",         label: "date",          inputType: "datetime-local",                               defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
    { name: "hash",         label: "hash",          inputType: "string", placeholder: "Enter tx hash",         defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "ledger_index", label: "ledger_index",  inputType: "number", placeholder: "Enter ledger index",    defaultOperator: "=", operators: validOperators(DATE_OPERATORS), },
    { name: "Fee",          label: "Fee",           inputType: "number", placeholder: "Enter fee amount",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Memos.Memo.MemoData", label: "Memo",   inputType: "string", placeholder: "Enter memo",            defaultOperator: "contains", operators: validOperators(STRING_OPERATORS), },
    { name: "SourceTag",    label: "SourceTag",     inputType: "number", placeholder: "Enter source tag",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "NFTokenID",    label: "NFTokenID",     inputType: "string", placeholder: "Enter NFTokenID",       defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "NetworkID",    label: "NetworkID",     inputType: "number", placeholder: "Enter Network ID",      defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },

    // meta
    { name: "meta.delivered_amount.value",    label: "delivered_amount",            inputType: "number", placeholder: "Enter delivered_amount",           defaultOperator: "=",    operators: validOperators(NUMERIC_OPERATORS), },
    { name: "meta.delivered_amount.currency", label: "delivered_amount (currency)", inputType: "string", placeholder: "Enter delivered_amount.currency",  defaultOperator: "=",    operators: validOperators(EQUAL_OPERATORS), },
    { name: "meta.delivered_amount.issuer",   label: "delivered_amount (issuer)",   inputType: "string", placeholder: "Enter delivered_amount.issuer",    defaultOperator: "=",    operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "meta.TransactionIndex",     label: "TransactionIndex",            inputType: "number", placeholder: "Enter tx index",                   defaultOperator: "=",    operators: validOperators(NUMERIC_OPERATORS), },
    { name: "meta.TransactionResult",    label: "TransactionResult",           valueEditorType: "select", values: transactionResults,                defaultValue: "Payment", operators: validOperators(EQUAL_OPERATORS), },

    // Common
    { name: "inLedger",           label: "inLedger",           inputType: "number", placeholder: "Enter ledger index",         defaultOperator: "=", operators: validOperators(DATE_OPERATORS), },
    { name: "AccountTxnID",       label: "AccountTxnID",       inputType: "string", placeholder: "Enter AccountTxnID",         defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "PreviousTxnID",      label: "PreviousTxnID",      inputType: "string", placeholder: "Enter previous txn ID",      defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "Flags",              label: "Flags",              inputType: "number", placeholder: "Enter tx flags",            defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Signers",            label: "Signers",            inputType: "string", placeholder: "Enter signer",               defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "SigningPubKey",      label: "SigningPubKey",      inputType: "string", placeholder: "Enter signing public key",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "TxnSignature",       label: "TxnSignature",       inputType: "string", placeholder: "Enter tx signature",         defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Owner",              label: "Owner",              inputType: "string", placeholder: "Enter owner",                defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "Expiration",         label: "Expiration",         inputType: "datetime-local",                                    defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
    { name: "Sequence",           label: "Sequence",           inputType: "number", placeholder: "Enter sequence",             defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "LastLedgerSequence", label: "LastLedgerSequence", inputType: "number", placeholder: "Enter last ledger sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "LedgerSequence",     label: "LedgerSequence",     inputType: "number", placeholder: "Enter ledger sequence",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "OfferSequence",      label: "OfferSequence",      inputType: "number", placeholder: "Enter offer sequence",       defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "TicketSequence",     label: "TicketSequence",     inputType: "number", placeholder: "Enter ticket sequence",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    { name: "TransactionType", label: "TransactionType", valueEditorType: "select", values: transactionTypes, defaultValue: "Payment", operators: validOperators(EQUAL_OPERATORS), },
    { name: "validated",       label: "validated",       valueEditorType: "checkbox",                         defaultValue: true,      operators: validOperators(EQUAL_OPERATORS), },

    // AccountSet
    { name: "ClearFlag",     label: "ClearFlag",     inputType: "number", placeholder: "Enter clear flag",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Domain",        label: "Domain",        inputType: "string", placeholder: "Enter domain",         defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },
    { name: "EmailHash",     label: "EmailHash",     inputType: "string", placeholder: "Enter email hash",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "MessageKey",    label: "MessageKey",    inputType: "string", placeholder: "Enter message key",    defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "NFTokenMinter", label: "NFTokenMinter", inputType: "string", placeholder: "Enter NFToken minter", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "SetFlag",       label: "SetFlag",       inputType: "number", placeholder: "Enter set flag",       defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "TransferRate",  label: "TransferRate",  inputType: "number", placeholder: "Enter transfer rate",  defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "TickSize",      label: "TickSize",      inputType: "number", placeholder: "Enter tick size",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "WalletLocator", label: "WalletLocator", inputType: "string", placeholder: "Enter wallet locator", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },
    { name: "WalletSize",    label: "WalletSize",    inputType: "number", placeholder: "Enter wallet size",    defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    // AMM
    { name: "Asset.currency",  label: "Asset (currency)",  inputType: "string", placeholder: "Enter Asset.currency",  defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Asset.issuer",    label: "Asset (issuer)",    inputType: "string", placeholder: "Enter Asset.issuer",    defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "Asset2.currency", label: "Asset2 (currency)", inputType: "string", placeholder: "Enter Asset2.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Asset2.issuer",   label: "Asset2 (issuer)",   inputType: "string", placeholder: "Enter Asset2.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "BidMin.value",    label: "BidMin",            inputType: "number", placeholder: "Enter BidMin",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "BidMin.currency", label: "BidMin (currency)", inputType: "string", placeholder: "Enter BidMin.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "BidMin.issuer",   label: "BidMin (issuer)",   inputType: "string", placeholder: "Enter BidMin.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "BidMax.value",    label: "BidMax",            inputType: "number", placeholder: "Enter BidMax",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "BidMax.currency", label: "BidMax (currency)", inputType: "string", placeholder: "Enter BidMax.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "BidMax.issuer",   label: "BidMax (issuer)",   inputType: "string", placeholder: "Enter BidMax.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "AuthAccounts",    label: "AuthAccounts",      inputType: "string", placeholder: "Enter auth account",    defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "TradingFee",      label: "TradingFee",        inputType: "number", placeholder: "Enter trading fee",     defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    { name: "Amount2.value",       label: "Amount2",               inputType: "number", placeholder: "Enter Amount2",             defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Amount2.currency",    label: "Amount2 (currency)",    inputType: "string", placeholder: "Enter Amount2.currency",    defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Amount2.issuer",      label: "Amount2 (issuer)",      inputType: "string", placeholder: "Enter Amount2.issuer",      defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "EPrice.value",        label: "EPrice",                inputType: "number", placeholder: "Enter EPrice",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "EPrice.currency",     label: "EPrice (currency)",     inputType: "string", placeholder: "Enter EPrice.currency",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "EPrice.issuer",       label: "EPrice (issuer)",       inputType: "string", placeholder: "Enter EPrice.issuer",       defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "LPTokenOut.value",    label: "LPTokenOut",            inputType: "number", placeholder: "Enter LPTokenOut",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "LPTokenOut.currency", label: "LPTokenOut (currency)", inputType: "string", placeholder: "Enter LPTokenOut.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "LPTokenOut.issuer",   label: "LPTokenOut (issuer)",   inputType: "string", placeholder: "Enter LPTokenOut.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "LPTokenIn.value",     label: "LPTokenIn",             inputType: "number", placeholder: "Enter LPTokenIn",           defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "LPTokenIn.currency",  label: "LPTokenIn (currency)",  inputType: "string", placeholder: "Enter LPTokenIn.currency",  defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "LPTokenIn.issuer",    label: "LPTokenIn (issuer)",    inputType: "string", placeholder: "Enter LPTokenIn.issuer",    defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // Check
    { name: "CheckID", label: "CheckID", inputType: "string", placeholder: "Enter CheckID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

    // DepositPreauth
    { name: "Authorize",   label: "Authorize",   inputType: "string", placeholder: "Enter authorized account",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "Unauthorize", label: "Unauthorize", inputType: "string", placeholder: "Enter unauthorized account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // DID
    { name: "Data",        label: "Data",        inputType: "string", placeholder: "Enter data",        defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "DIDDocument", label: "DIDDocument", inputType: "string", placeholder: "Enter DIDDocument", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // EnableAmendment
    { name: "Amendment", label: "Amendment", inputType: "string", placeholder: "Enter amendment", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

    // Escrow
    { name: "CancelAfter", label: "CancelAfter", inputType: "datetime-local",                           defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
    { name: "FinishAfter", label: "FinishAfter", inputType: "datetime-local",                           defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
    { name: "Condition",   label: "Condition",   inputType: "string", placeholder: "Enter condition",   defaultOperator: "=",       operators: validOperators(HASH_OPERATORS), },
    { name: "Fulfillment", label: "Fulfillment", inputType: "string", placeholder: "Enter fulfillment", defaultOperator: "=",       operators: validOperators(HASH_OPERATORS), },

    // NFToken
    { name: "NFTokenSellOffer",          label: "NFTokenSellOffer",            inputType: "string", placeholder: "Enter NFTokenSellOffer",          defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "NFTokenBuyOffer",           label: "NFTokenBuyOffer",             inputType: "string", placeholder: "Enter NFTokenBuyOffer",           defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "NFTokenBrokerFee.value",    label: "NFTokenBrokerFee",            inputType: "number", placeholder: "Enter NFTokenBrokerFee",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "NFTokenBrokerFee.currency", label: "NFTokenBrokerFee (currency)", inputType: "string", placeholder: "Enter NFTokenBrokerFee.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "NFTokenBrokerFee.issuer",   label: "NFTokenBrokerFee (issuer)",   inputType: "string", placeholder: "Enter NFTokenBrokerFee.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "NFTokenOffers",             label: "NFTokenOffers",               inputType: "string", placeholder: "Enter NFTokenOffers",             defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "NFTokenTaxon",              label: "NFTokenTaxon",                inputType: "number", placeholder: "Enter NFTokenTaxon",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Issuer",                    label: "Issuer",                      inputType: "string", placeholder: "Enter issuer",                    defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "TransferFee",               label: "TransferFee",                 inputType: "number", placeholder: "Enter transfer fee",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "URI",                       label: "URI",                         inputType: "string", placeholder: "Enter URI",                       defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },

    // Offer
    { name: "TakerGets.value",    label: "TakerGets",                inputType: "number", placeholder: "Enter TakerGets",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "TakerGets.currency", label: "TakerGets (currency)",     inputType: "string", placeholder: "Enter TakerGets.currency",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "TakerGets.issuer",   label: "TakerGets (issuer)",       inputType: "string", placeholder: "Enter TakerGets.issuer",       defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "TakerPays.value",    label: "TakerPays",                inputType: "number", placeholder: "Enter TakerPays",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "TakerPays.currency", label: "TakerPays (currency)",     inputType: "string", placeholder: "Enter TakerPays.currency",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "TakerPays.issuer",   label: "TakerPays (issuer)",       inputType: "string", placeholder: "Enter TakerPays.issuer",       defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // Payment
    { name: "Amount.value",        label: "Amount",                inputType: "number", placeholder: "Enter Amount",              defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Amount.currency",     label: "Amount (currency)",     inputType: "string", placeholder: "Enter Amount.currency",     defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Amount.issuer",       label: "Amount (issuer)",       inputType: "string", placeholder: "Enter Amount.issuer",       defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "Destination",         label: "Destination",           inputType: "string", placeholder: "Enter destination",         defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS),},
    { name: "DestinationTag",      label: "DestinationTag",        inputType: "number", placeholder: "Enter destination tag",     defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS),},
    { name: "InvoiceID",           label: "InvoiceID",             inputType: "string", placeholder: "Enter InvoiceID",           defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "Paths",               label: "Paths",                 inputType: "string", placeholder: "Enter InvoiceID",           defaultOperator: "=", operators: validOperators(STRING_OPERATORS), }, // TODO
    { name: "SendMax.value",       label: "SendMax",               inputType: "number", placeholder: "Enter SendMax",             defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "SendMax.currency",    label: "SendMax (currency)",    inputType: "string", placeholder: "Enter SendMax.currency",    defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "SendMax.issuer",      label: "SendMax (issuer)",      inputType: "string", placeholder: "Enter SendMax.issuer",      defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "DeliverMin.value",    label: "DeliverMin",            inputType: "number", placeholder: "Enter DeliverMin",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "DeliverMin.currency", label: "DeliverMin (currency)", inputType: "string", placeholder: "Enter DeliverMin.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "DeliverMin.issuer",   label: "DeliverMin (issuer)",   inputType: "string", placeholder: "Enter DeliverMin.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "DeliverMax.value",    label: "DeliverMax",            inputType: "number", placeholder: "Enter DeliverMax",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "DeliverMax.currency", label: "DeliverMax (currency)", inputType: "string", placeholder: "Enter DeliverMax.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "DeliverMax.issuer",   label: "DeliverMax (issuer)",   inputType: "string", placeholder: "Enter DeliverMax.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // PaymentChannel
    { name: "Channel",          label: "Channel",            inputType: "string", placeholder: "Enter channel",          defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "Balance.value",    label: "Balance",            inputType: "number", placeholder: "Enter Balance",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "Balance.currency", label: "Balance (currency)", inputType: "string", placeholder: "Enter Balance.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "Balance.issuer",   label: "Balance (issuer)",   inputType: "string", placeholder: "Enter Balance.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "Signature",        label: "Signature",          inputType: "string", placeholder: "Enter signature",        defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
    { name: "SettleDelay",      label: "SettleDelay",        inputType: "number", placeholder: "Enter settle delay",     defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "PublicKey",        label: "PublicKey",          inputType: "string", placeholder: "Enter public key",       defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

    // SetFee
    { name: "BaseFee",               label: "BaseFee",               inputType: "number", placeholder: "Enter base fee",                defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "ReferenceFeeUnits",     label: "ReferenceFeeUnits",     inputType: "number", placeholder: "Enter reference fee units",     defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "ReserveBase",           label: "ReserveBase",           inputType: "number", placeholder: "Enter reserve base",            defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "ReserveIncrement",      label: "ReserveIncrement",      inputType: "number", placeholder: "Enter reserve increment",       defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "BaseFeeDrops",          label: "BaseFeeDrops",          inputType: "number", placeholder: "Enter base fee drops",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "ReserveBaseDrops",      label: "ReserveBaseDrops",      inputType: "number", placeholder: "Enter reserve base drops",      defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "ReserveIncrementDrops", label: "ReserveIncrementDrops", inputType: "number", placeholder: "Enter reserve increment drops", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    // SetRegularKey
    { name: "RegularKey", label: "RegularKey", inputType: "string", placeholder: "Enter regular key",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

    // SignerListSet
    { name: "SignerQuorum",  label: "SignerQuorum",  inputType: "number", placeholder: "Enter signer quorum",  defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "SignerEntries", label: "SignerEntries", inputType: "string", placeholder: "Enter signer entries", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), }, // TODO

    // Ticket
    { name: "TicketCount", label: "TicketCount", inputType: "number", placeholder: "Enter ticket count",  defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    // TrustSet
    { name: "LimitAmount.value",    label: "LimitAmount",            inputType: "number", placeholder: "Enter LimitAmount",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "LimitAmount.currency", label: "LimitAmount (currency)", inputType: "string", placeholder: "Enter LimitAmount.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
    { name: "LimitAmount.issuer",   label: "LimitAmount (issuer)",   inputType: "string", placeholder: "Enter LimitAmount.issuer",   defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
    { name: "QualityIn",            label: "QualityIn",              inputType: "number", placeholder: "Enter quality in",           defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "QualityOut",           label: "QualityOut",             inputType: "number", placeholder: "Enter quality out",          defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    // UNLModify
    { name: "UNLModifyDisabling", label: "UNLModifyDisabling", inputType: "number", placeholder: "Enter UNLModifyDisabling",  defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
    { name: "UNLModifyValidator", label: "UNLModifyValidator", inputType: "string", placeholder: "Enter UNLModifyValidator",  defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS),},

    // Xahau Burn2Mint
    { name: "OperationLimit", label: "OperationLimit", inputType: "number", placeholder: "Enter operation limit",  defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

    // XChain - TODO 
  ] satisfies Field[]
).map((o) => toFullOption(o));
