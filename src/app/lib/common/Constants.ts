/**
* Constants used in XRP Ledger.
*/

export const NATIVE_CURRENCY = 'XRP';
Object.freeze(NATIVE_CURRENCY);

export const LPTOKEN_PREFIX = 'LP'
Object.freeze(LPTOKEN_PREFIX);

/**
* Enum of all Transaction Types supported by XRPL
*
*/

const TransactionType = {
  AccountSet: 'AccountSet',
  AccountDelete: 'AccountDelete',
  AMMBid: 'AMMBid',
  AMMClawback: 'AMMClawback',
  AMMCreate: 'AMMCreate',
  AMMDelete: 'AMMDelete',
  AMMDeposit: 'AMMDeposit',
  AMMVote: 'AMMVote',
  AMMWithdraw: 'AMMWithdraw',
  CheckCancel: 'CheckCancel',
  CheckCash: 'CheckCash',
  CheckCreate: 'CheckCreate',
  Clawback: 'Clawback',
  DepositPreauth: 'DepositPreauth',
  DIDDelete: 'DIDDelete',
  DIDSet: 'DIDSet',
  EscrowCancel: 'EscrowCancel',
  EscrowCreate: 'EscrowCreate',
  EscrowFinish: 'EscrowFinish',
  NFTokenAcceptOffer: 'NFTokenAcceptOffer',
  NFTokenBurn: 'NFTokenBurn',
  NFTokenCancelOffer: 'NFTokenCancelOffer',
  NFTokenCreateOffer: 'NFTokenCreateOffer',
  NFTokenMint: 'NFTokenMint',
  OfferCancel: 'OfferCancel',
  OfferCreate: 'OfferCreate',
  OracleDelete: 'OracleDelete',
  OracleSet: 'OracleSet',
  Payment: 'Payment',
  PaymentChannelClaim: 'PaymentChannelClaim',
  PaymentChannelCreate: 'PaymentChannelCreate',
  PaymentChannelFund: 'PaymentChannelFund',
  SetRegularKey: 'SetRegularKey',
  SignerListSet: 'SignerListSet',
  TicketCreate: 'TicketCreate',
  TrustSet: 'TrustSet',
  EnableAmendment: 'EnableAmendment',
  SetFee: 'SetFee',
  UNLModify: 'UNLModify',
};
Object.freeze(TransactionType);
export { TransactionType };


export const XrplNetwork = {
  XrplMainnet: 0,
  XrplTestnet: 1,
  XrplDevnet: 2,
  XahauMainnet: 21337,
  XahauTestnet: 21338,
}
Object.freeze(XrplNetwork)

export const XrplNetworkUrls = {
  XrplMainnet: "https://xrpscan.com",
  XahauTestnet: "https://test.xahscan.com",
  XahauMainnet: "https://xahscan.com",
}
Object.freeze(XrplNetworkUrls)
