import type { OptionGroup } from "react-querybuilder";

export const transactionTypes: OptionGroup[] = [
  {
    label: "General",
    TransactionTypes: [
        "Payment",
        "AccountSet",
        "AccountDelete",
        "Clawback",
        "DepositPreauth",
        "EnableAmendment",
        "SetFee",
        "SetRegularKey",
        "SignerListSet",
        "TicketCreate",
        "TrustSet",
        "UNLModify",
    ],
  },
  {
    label: "AMM",
    TransactionTypes: [
        "AMMBid",
        "AMMCreate",
        "AMMDelete",
        "AMMDeposit",
        "AMMVote",
        "AMMWithdraw",
    ],
  },
  {
    label: "Check",
    TransactionTypes: [
        "CheckCancel",
        "CheckCash",
        "CheckCreate",
      ],
  },
  {
    label: "DID",
    TransactionTypes: [
      "DIDDelete",
      "DIDSet",
    ],
  },
  {
    label: "Escrow",
    TransactionTypes: [
      "EscrowCancel",
      "EscrowCreate",
      "EscrowFinish",
    ],
  },
  {
    label: "NFToken",
    TransactionTypes: [
      "NFTokenAcceptOffer",
      "NFTokenBurn",
      "NFTokenCancelOffer",
      "NFTokenCreateOffer",
      "NFTokenMint",
    ],
  },
  {
    label: "Offer",
    TransactionTypes: [
      "OfferCancel",
      "OfferCreate",
    ],
  },
  {
    label: "PaymentChannel",
    TransactionTypes: [
      "PaymentChannelClaim",
      "PaymentChannelCreate",
      "PaymentChannelFund",
    ],
  },
  {
    label: "XChain",
    TransactionTypes: [
      "XChainAccountCreateCommit",
      "XChainAddAccountCreateAttestation",
      "XChainAddClaimAttestation",
      "XChainClaim",
      "XChainCommit",
      "XChainCreateBridge",
      "XChainCreateClaimID",
      "XChainModifyBridge",
    ],
  },
].map(({ label, TransactionTypes }) => ({
  label,
  options: TransactionTypes.map((s) => ({ name: s, label: s })),
}));