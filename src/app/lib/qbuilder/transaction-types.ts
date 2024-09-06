import type { OptionGroup } from "react-querybuilder";
import { TransactionType } from "../common/Constants";

export const transactionTypes: OptionGroup[] = [
  {
    label: "General",
    TransactionTypes: [
      TransactionType.Payment,
      TransactionType.AccountSet,
      TransactionType.AccountDelete,
      TransactionType.DepositPreauth,
      TransactionType.EnableAmendment,
      TransactionType.SetFee,
      TransactionType.SetRegularKey,
      TransactionType.SignerListSet,
      TransactionType.TrustSet,
      TransactionType.UNLModify,
    ],
  },
  {
    label: "AMM",
    TransactionTypes: [
      TransactionType.AMMBid,
      TransactionType.AMMCreate,
      TransactionType.AMMDelete,
      TransactionType.AMMDeposit,
      TransactionType.AMMVote,
      TransactionType.AMMWithdraw,
    ],
  },
  {
    label: "Check",
    TransactionTypes: [
      TransactionType.CheckCancel,
      TransactionType.CheckCash,
      TransactionType.CheckCreate,
    ],
  },
  {
    label: "Clawback",
    TransactionTypes: [
      TransactionType.Clawback,        
    ],
  },
  {
    label: "DID",
    TransactionTypes: [
      TransactionType.DIDDelete,
      TransactionType.DIDSet,
    ],
  },
  {
    label: "Escrow",
    TransactionTypes: [
      TransactionType.EscrowCancel,
      TransactionType.EscrowCreate,
      TransactionType.EscrowFinish,
    ],
  },
  {
    label: "NFToken",
    TransactionTypes: [
      TransactionType.NFTokenAcceptOffer,
      TransactionType.NFTokenBurn,
      TransactionType.NFTokenCancelOffer,
      TransactionType.NFTokenCreateOffer,
      TransactionType.NFTokenMint,
    ],
  },
  {
    label: "Offer",
    TransactionTypes: [
      TransactionType.OfferCancel,
      TransactionType.OfferCreate,
    ],
  },
  {
    label: "Oracle",
    TransactionTypes: [
      TransactionType.OracleDelete,
      TransactionType.OracleSet,
    ],
  },
  {
    label: "PaymentChannel",
    TransactionTypes: [
      TransactionType.PaymentChannelClaim,
      TransactionType.PaymentChannelCreate,
      TransactionType.PaymentChannelFund,
    ],
  },
  {
    label: "Ticket",
    TransactionTypes: [
      TransactionType.TicketCreate,
    ],
  },
].map(({ label, TransactionTypes }) => ({
  label,
  options: TransactionTypes.map((s) => ({ name: s, label: s })),
}));