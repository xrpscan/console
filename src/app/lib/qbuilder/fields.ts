import type { Field, RuleType } from "react-querybuilder";
import { defaultOperators, toFullOption } from "react-querybuilder";
import { transactionTypes } from "./transaction-types";
import { transactionResults } from "./transaction-results";
import { amendmentList } from "./amendments";
import { TransactionType } from "../common/Constants";

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

const FieldGroups = {
  Common: "Common fields",
  AccountSet: "AccountSet",
  AMM: "AMM",
  Check: "Check",
  Clawback: "Clawback",
  DepositPreauth: "DepositPreauth",
  DID: "DID",
  EnableAmendment: "EnableAmendment",
  Escrow: "Escrow",
  Metadata: "Metadata",
  NFToken: "NFToken",
  Offer: "Offer",
  Oracle: "Oracle",
  Payment: "Payment",
  PaymentChannel: "Payment Channel",
  SetRegularKey: "SetRegularKey",
  SignerListSet: "SignerListSet",
  TicketCreate: "TicketCreate",
  TrustSet: "TrustSet",
  SetFee: "SetFee",
  UNLModify: "UNLModify",
  Others: "Others",
  Xahau: "Xahau",
}

export const fields = [
  // Common fields
  { group: FieldGroups.Common, name: "TransactionType", label: "TransactionType", valueEditorType: "select", values: transactionTypes, defaultValue: "Payment", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Common, name: "Account", label: "Account", inputType: "string", placeholder: "Enter sending account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Common, name: "AccountTxnID", label: "AccountTxnID", inputType: "string", placeholder: "Enter AccountTxnID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.Common, name: "Amount.value", label: "Amount", inputType: "number",  defaultValue: 0, placeholder: "Enter Amount", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Amount.currency", label: "Amount (currency)", inputType: "string", placeholder: "Enter Amount.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Common, name: "Amount.issuer", label: "Amount (issuer)", inputType: "string", placeholder: "Enter Amount.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Common, name: "CancelAfter", label: "CancelAfter", inputType: "datetime-local", defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Common, name: "Destination", label: "Destination", inputType: "string", placeholder: "Enter destination", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS),},
  { group: FieldGroups.Common, name: "DestinationTag", label: "DestinationTag", inputType: "number", defaultValue: 0, placeholder: "Enter destination tag", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Expiration", label: "Expiration", inputType: "datetime-local", defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Common, name: "Fee", label: "Fee", inputType: "number",  defaultValue: 0, placeholder: "Enter fee amount", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Flags", label: "Flags", inputType: "number",  defaultValue: 0, placeholder: "Enter tx flags", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "InvoiceID", label: "InvoiceID", inputType: "string", placeholder: "Enter InvoiceID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.Common, name: "LastLedgerSequence", label: "LastLedgerSequence", inputType: "number",  defaultValue: 0, placeholder: "Enter last ledger sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "LedgerSequence", label: "LedgerSequence", inputType: "number",  defaultValue: 0, placeholder: "Enter ledger sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Memos.Memo.MemoData", label: "Memo", inputType: "string", placeholder: "Enter memo", defaultOperator: "contains", operators: validOperators(STRING_OPERATORS), },
  { group: FieldGroups.Common, name: "OfferSequence", label: "OfferSequence", inputType: "number",  defaultValue: 0, placeholder: "Enter offer sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Owner", label: "Owner", inputType: "string", placeholder: "Enter owner", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Common, name: "Sequence", label: "Sequence", inputType: "number",  defaultValue: 0, placeholder: "Enter sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "Signers", label: "Signers", inputType: "string", placeholder: "Enter signer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Common, name: "SigningPubKey", label: "SigningPubKey", inputType: "string", placeholder: "Enter signing public key", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Common, name: "SourceTag", label: "SourceTag", inputType: "number",  defaultValue: 0, placeholder: "Enter source tag", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "TicketSequence", label: "TicketSequence", inputType: "number",  defaultValue: 0, placeholder: "Enter ticket sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Common, name: "TxnSignature", label: "TxnSignature", inputType: "string", placeholder: "Enter tx signature", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Common, name: "URI", label: "URI", inputType: "string", placeholder: "Enter URI", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },
  { group: FieldGroups.Common, name: "ctid", label: "ctid", inputType: "string", placeholder: "Enter CTID", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  // { group: FieldGroups.Common, name: "date", label: "date", inputType: "date", defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Common, name: "hash", label: "hash", inputType: "string", placeholder: "Enter tx hash", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Common, name: "ledger_index", label: "ledger_index", inputType: "number",  defaultValue: 0, placeholder: "Enter ledger index", defaultOperator: "=", operators: validOperators(DATE_OPERATORS), },

  // Metadata
  { group: FieldGroups.Metadata, name: "meta.delivered_amount.value", label: "delivered_amount", inputType: "number",  defaultValue: 0, placeholder: "Enter delivered_amount", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Metadata, name: "meta.delivered_amount.currency", label: "delivered_amount (currency)", inputType: "string", placeholder: "Enter delivered_amount.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Metadata, name: "meta.delivered_amount.issuer", label: "delivered_amount (issuer)", inputType: "string", placeholder: "Enter delivered_amount.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Metadata, name: "meta.TransactionIndex", label: "TransactionIndex", inputType: "number",  defaultValue: 0, placeholder: "Enter tx index", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Metadata, name: "meta.TransactionResult", label: "TransactionResult", valueEditorType: "select", values: transactionResults, defaultValue: "tesSUCCESS", operators: validOperators(EQUAL_OPERATORS), },

  // Payment
  { group: FieldGroups.Payment, name: "DeliverMax.value", label: "DeliverMax", inputType: "number",  defaultValue: 0, placeholder: "Enter DeliverMax", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Payment, name: "DeliverMax.currency", label: "DeliverMax (currency)", inputType: "string", placeholder: "Enter DeliverMax.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Payment, name: "DeliverMax.issuer", label: "DeliverMax (issuer)", inputType: "string", placeholder: "Enter DeliverMax.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Payment, name: "DeliverMin.value", label: "DeliverMin", inputType: "number",  defaultValue: 0, placeholder: "Enter DeliverMin", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Payment, name: "DeliverMin.currency", label: "DeliverMin (currency)", inputType: "string", placeholder: "Enter DeliverMin.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Payment, name: "DeliverMin.issuer", label: "DeliverMin (issuer)", inputType: "string", placeholder: "Enter DeliverMin.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Payment, name: "Paths", label: "Paths", inputType: "string", placeholder: "Enter InvoiceID", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), }, // TODO
  { group: FieldGroups.Payment, name: "SendMax.value", label: "SendMax", inputType: "number",  defaultValue: 0, placeholder: "Enter SendMax", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Payment, name: "SendMax.currency", label: "SendMax (currency)", inputType: "string", placeholder: "Enter SendMax.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Payment, name: "SendMax.issuer", label: "SendMax (issuer)", inputType: "string", placeholder: "Enter SendMax.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // AccountSet
  { group: FieldGroups.AccountSet, name: "ClearFlag", label: "ClearFlag", inputType: "number",  defaultValue: 0, placeholder: "Enter clear flag", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "Domain", label: "Domain", inputType: "string", placeholder: "Enter domain", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "EmailHash", label: "EmailHash", inputType: "string", placeholder: "Enter email hash", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "MessageKey", label: "MessageKey", inputType: "string", placeholder: "Enter message key", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "NFTokenMinter", label: "NFTokenMinter", inputType: "string", placeholder: "Enter NFToken minter", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "SetFlag", label: "SetFlag", inputType: "number",  defaultValue: 0, placeholder: "Enter set flag", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "TickSize", label: "TickSize", inputType: "number",  defaultValue: 0, placeholder: "Enter tick size", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "TransferRate", label: "TransferRate", inputType: "number",  defaultValue: 0, placeholder: "Enter transfer rate", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "WalletLocator", label: "WalletLocator (deprecated)", inputType: "string", placeholder: "Enter wallet locator", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), },
  { group: FieldGroups.AccountSet, name: "WalletSize", label: "WalletSize (deprecated)", inputType: "number",  defaultValue: 0, placeholder: "Enter wallet size", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // AMM
  { group: FieldGroups.AMM, name: "Amount2.value", label: "Amount2", inputType: "number",  defaultValue: 0, placeholder: "Enter Amount2", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "Amount2.currency", label: "Amount2 (currency)", inputType: "string", placeholder: "Enter Amount2.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "Amount2.issuer", label: "Amount2 (issuer)", inputType: "string", placeholder: "Enter Amount2.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "Asset.currency", label: "Asset (currency)", inputType: "string", placeholder: "Enter Asset.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "Asset.issuer", label: "Asset (issuer)", inputType: "string", placeholder: "Enter Asset.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "Asset2.currency", label: "Asset2 (currency)", inputType: "string", placeholder: "Enter Asset2.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "Asset2.issuer", label: "Asset2 (issuer)", inputType: "string", placeholder: "Enter Asset2.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "AuthAccounts", label: "AuthAccounts", inputType: "string", placeholder: "Enter auth account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMax.value", label: "BidMax", inputType: "number",  defaultValue: 0, placeholder: "Enter BidMax", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMax.currency", label: "BidMax (currency)", inputType: "string", placeholder: "Enter BidMax.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMax.issuer", label: "BidMax (issuer)", inputType: "string", placeholder: "Enter BidMax.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMin.value", label: "BidMin", inputType: "number",  defaultValue: 0, placeholder: "Enter BidMin", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMin.currency", label: "BidMin (currency)", inputType: "string", placeholder: "Enter BidMin.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "BidMin.issuer", label: "BidMin (issuer)", inputType: "string", placeholder: "Enter BidMin.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "EPrice.value", label: "EPrice", inputType: "number",  defaultValue: 0, placeholder: "Enter EPrice", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "EPrice.currency", label: "EPrice (currency)", inputType: "string", placeholder: "Enter EPrice.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "EPrice.issuer", label: "EPrice (issuer)", inputType: "string", placeholder: "Enter EPrice.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenIn.value", label: "LPTokenIn", inputType: "number",  defaultValue: 0, placeholder: "Enter LPTokenIn", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenIn.currency", label: "LPTokenIn (currency)", inputType: "string", placeholder: "Enter LPTokenIn.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenIn.issuer", label: "LPTokenIn (issuer)", inputType: "string", placeholder: "Enter LPTokenIn.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenOut.value", label: "LPTokenOut", inputType: "number",  defaultValue: 0, placeholder: "Enter LPTokenOut", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenOut.currency", label: "LPTokenOut (currency)", inputType: "string", placeholder: "Enter LPTokenOut.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.AMM, name: "LPTokenOut.issuer", label: "LPTokenOut (issuer)", inputType: "string", placeholder: "Enter LPTokenOut.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.AMM, name: "TradingFee", label: "TradingFee", inputType: "number",  defaultValue: 0, placeholder: "Enter trading fee", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // Check
  { group: FieldGroups.Check, name: "CheckID", label: "CheckID", inputType: "string", placeholder: "Enter CheckID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

  // Clawback

  // DepositPreauth
  { group: FieldGroups.DepositPreauth, name: "Authorize", label: "Authorize", inputType: "string", placeholder: "Enter authorized account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.DepositPreauth, name: "Unauthorize", label: "Unauthorize", inputType: "string", placeholder: "Enter unauthorized account", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // DID
  { group: FieldGroups.DID, name: "Data", label: "Data", inputType: "string", placeholder: "Enter data", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.DID, name: "DIDDocument", label: "DIDDocument", inputType: "string", placeholder: "Enter DIDDocument", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // EnableAmendment
  { group: FieldGroups.EnableAmendment, name: "Amendment", label: "Amendment", valueEditorType: "select", values: amendmentList, defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

  // Escrow
  { group: FieldGroups.Escrow, name: "Condition", label: "Condition", inputType: "string", placeholder: "Enter condition", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.Escrow, name: "FinishAfter", label: "FinishAfter", inputType: "datetime-local", defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Escrow, name: "Fulfillment", label: "Fulfillment", inputType: "string", placeholder: "Enter fulfillment", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

  // NFToken
  { group: FieldGroups.NFToken, name: "Issuer", label: "Issuer", inputType: "string", placeholder: "Enter issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenBrokerFee.value", label: "NFTokenBrokerFee", inputType: "number",  defaultValue: 0, placeholder: "Enter NFTokenBrokerFee", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenBrokerFee.currency", label: "NFTokenBrokerFee (currency)", inputType: "string", placeholder: "Enter NFTokenBrokerFee.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenBrokerFee.issuer", label: "NFTokenBrokerFee (issuer)", inputType: "string", placeholder: "Enter NFTokenBrokerFee.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenBuyOffer", label: "NFTokenBuyOffer", inputType: "string", placeholder: "Enter NFTokenBuyOffer", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenID", label: "NFTokenID", inputType: "string", placeholder: "Enter NFTokenID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenOffers", label: "NFTokenOffers", inputType: "string", placeholder: "Enter NFTokenOffers", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenSellOffer", label: "NFTokenSellOffer", inputType: "string", placeholder: "Enter NFTokenSellOffer", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.NFToken, name: "NFTokenTaxon", label: "NFTokenTaxon", inputType: "number",  defaultValue: 0, placeholder: "Enter NFTokenTaxon", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.NFToken, name: "TransferFee", label: "TransferFee", inputType: "number",  defaultValue: 0, placeholder: "Enter transfer fee", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // Offer
  { group: FieldGroups.Offer, name: "TakerGets.value", label: "TakerGets", inputType: "number",  defaultValue: 0, placeholder: "Enter TakerGets", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Offer, name: "TakerGets.currency", label: "TakerGets (currency)", inputType: "string", placeholder: "Enter TakerGets.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Offer, name: "TakerGets.issuer", label: "TakerGets (issuer)", inputType: "string", placeholder: "Enter TakerGets.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Offer, name: "TakerPays.value", label: "TakerPays", inputType: "number",  defaultValue: 0, placeholder: "Enter TakerPays", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Offer, name: "TakerPays.currency", label: "TakerPays (currency)", inputType: "string", placeholder: "Enter TakerPays.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Offer, name: "TakerPays.issuer", label: "TakerPays (issuer)", inputType: "string", placeholder: "Enter TakerPays.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // Oracle
  { group: FieldGroups.Oracle, name: "AssetClass", label: "AssetClass", inputType: "string", placeholder: "Enter issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Oracle, name: "LastUpdateTime", label: "LastUpdateTime", inputType: "date", defaultOperator: "between", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Oracle, name: "OracleDocumentID", label: "OracleDocumentID", inputType: "number",  defaultValue: 0, placeholder: "Enter offer sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Oracle, name: "PriceDataSeries.BaseAsset", label: "BaseAsset", inputType: "string", placeholder: "Enter issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Oracle, name: "PriceDataSeries.QuoteAsset", label: "QuoteAsset", inputType: "string", placeholder: "Enter issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.Oracle, name: "PriceDataSeries.AssetPrice", label: "AssetPrice", inputType: "number",  defaultValue: 0, placeholder: "Enter offer sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Oracle, name: "PriceDataSeries.Scale", label: "Scale", inputType: "number",  defaultValue: 0, placeholder: "Enter offer sequence", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.Oracle, name: "Provider", label: "Provider", inputType: "string", placeholder: "Enter issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // PaymentChannel
  { group: FieldGroups.PaymentChannel, name: "Balance.value", label: "Balance", inputType: "number",  defaultValue: 0, placeholder: "Enter Balance", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "Balance.currency", label: "Balance (currency)", inputType: "string", placeholder: "Enter Balance.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "Balance.issuer", label: "Balance (issuer)", inputType: "string", placeholder: "Enter Balance.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "Channel", label: "Channel", inputType: "string", placeholder: "Enter channel", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "PublicKey", label: "PublicKey", inputType: "string", placeholder: "Enter public key", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "SettleDelay", label: "SettleDelay", inputType: "number",  defaultValue: 0, placeholder: "Enter settle delay", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.PaymentChannel, name: "Signature", label: "Signature", inputType: "string", placeholder: "Enter signature", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },

  // SetRegularKey
  { group: FieldGroups.SetRegularKey, name: "RegularKey", label: "RegularKey", inputType: "string", placeholder: "Enter regular key", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },

  // SignerListSet
  { group: FieldGroups.SignerListSet, name: "SignerEntries", label: "SignerEntries", inputType: "string", placeholder: "Enter signer entries", defaultOperator: "=", operators: validOperators(STRING_OPERATORS), }, // TODO
  { group: FieldGroups.SignerListSet, name: "SignerQuorum", label: "SignerQuorum", inputType: "number",  defaultValue: 0, placeholder: "Enter signer quorum", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // SetFee
  { group: FieldGroups.SetFee, name: "BaseFee", label: "BaseFee", inputType: "number",  defaultValue: 0, placeholder: "Enter base fee", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "BaseFeeDrops", label: "BaseFeeDrops", inputType: "number",  defaultValue: 0, placeholder: "Enter base fee drops", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "ReferenceFeeUnits", label: "ReferenceFeeUnits", inputType: "number",  defaultValue: 0, placeholder: "Enter reference fee units", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "ReserveBase", label: "ReserveBase", inputType: "number",  defaultValue: 0, placeholder: "Enter reserve base", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "ReserveBaseDrops", label: "ReserveBaseDrops", inputType: "number",  defaultValue: 0, placeholder: "Enter reserve base drops", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "ReserveIncrement", label: "ReserveIncrement", inputType: "number",  defaultValue: 0, placeholder: "Enter reserve increment", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.SetFee, name: "ReserveIncrementDrops", label: "ReserveIncrementDrops", inputType: "number",  defaultValue: 0, placeholder: "Enter reserve increment drops", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // TicketCreate
  { group: FieldGroups.TicketCreate, name: "TicketCount", label: "TicketCount", inputType: "number",  defaultValue: 0, placeholder: "Enter ticket count", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // TrustSet
  { group: FieldGroups.TrustSet, name: "LimitAmount.value", label: "LimitAmount", inputType: "number",  defaultValue: 0, placeholder: "Enter LimitAmount", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.TrustSet, name: "LimitAmount.currency", label: "LimitAmount (currency)", inputType: "string", placeholder: "Enter LimitAmount.currency", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.TrustSet, name: "LimitAmount.issuer", label: "LimitAmount (issuer)", inputType: "string", placeholder: "Enter LimitAmount.issuer", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS), },
  { group: FieldGroups.TrustSet, name: "QualityIn", label: "QualityIn", inputType: "number",  defaultValue: 0, placeholder: "Enter quality in", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.TrustSet, name: "QualityOut", label: "QualityOut", inputType: "number",  defaultValue: 0, placeholder: "Enter quality out", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // UNLModify
  { group: FieldGroups.UNLModify, name: "UNLModifyDisabling", label: "UNLModifyDisabling", inputType: "number", placeholder: "Enter UNLModifyDisabling", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },
  { group: FieldGroups.UNLModify, name: "UNLModifyValidator", label: "UNLModifyValidator", inputType: "string", placeholder: "Enter UNLModifyValidator", defaultOperator: "=", operators: validOperators(ACCOUNT_OPERATORS),},

  // Xahau
  { group: FieldGroups.Xahau, name: "OperationLimit", label: "OperationLimit", inputType: "number",  defaultValue: 0, placeholder: "Enter operation limit", defaultOperator: "=", operators: validOperators(NUMERIC_OPERATORS), },

  // Others
  { group: FieldGroups.Others, name: "NetworkID", label: "NetworkID", inputType: "number",  defaultValue: 0, placeholder: "Enter Network ID", defaultOperator: "=", operators: validOperators(EQUAL_OPERATORS), },
  { group: FieldGroups.Others, name: "PreviousTxnID", label: "PreviousTxnID", inputType: "string", placeholder: "Enter previous txn ID", defaultOperator: "=", operators: validOperators(HASH_OPERATORS), },
  { group: FieldGroups.Others, name: "inLedger", label: "inLedger", inputType: "number",  defaultValue: 0, placeholder: "Enter ledger index", defaultOperator: "=", operators: validOperators(DATE_OPERATORS), },
  { group: FieldGroups.Others, name: "validated", label: "validated", valueEditorType: "checkbox", defaultValue: true, operators: validOperators(EQUAL_OPERATORS), },
]
