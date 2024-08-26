export type RemixColors = "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";

export const getTxTypeStyle = (txType: string, prefix=''): RemixColors => {
	let style: RemixColors = "cyan";
	switch (txType) {
		case 'CheckCancel':
		case 'EscrowCancel':
		case 'OfferCancel':
			style = "amber";
			break;
		case 'AccountDelete':
		case 'Clawback':
			style = "gray";
			break;
		case 'Payment':
		case 'NFTokenMint':
		case 'ACTIVATED':
			style = "indigo";
			break;
		case 'NFTokenBurn':
			style = "red";
			break;
		default:
			style = "cyan";
			break;
	}
	return style;
}

/**
* Return a human friendly name for transaction type
*
* @param (String) Label
*/

export const getTxTypeLabel = (txType: string) => {
	let type = '';
	switch (txType) {
		case 'AccountSet':
			type = 'Account set';
			break;
		case 'AccountDelete':
			type = 'Account delete';
			break;
		case 'AMMBid':
			type = 'AMM Bid';
			break;
		case 'AMMCreate':
			type = 'AMM Create';
			break;
		case 'AMMDelete':
			type = 'AMM Delete';
			break;
		case 'AMMDeposit':
			type = 'AMM Deposit';
			break;
		case 'AMMVote':
			type = 'AMM Vote';
			break;
		case 'AMMWithdraw':
			type = 'AMM Withdraw';
			break;
		case 'CheckCancel':
			type = 'Check cancel';
			break;
		case 'CheckCash':
			type = 'Check cash';
			break;
		case 'CheckCreate':
			type = 'Check';
			break;
		case 'Clawback':
			type = 'Clawback';
			break;
		case 'DepositPreauth':
			type = 'Deposit preauth';
			break;
		case 'EscrowCancel':
			type = 'Escrow cancel';
			break;
		case 'EscrowCreate':
			type = 'Escrow';
			break;
		case 'EscrowFinish':
			type = 'Escrow finish';
			break;
		case 'NFTokenAcceptOffer':
			type = 'NFT Accept offer';
			break;
		case 'NFTokenBurn':
			type = 'NFT Burn';
			break;
		case 'NFTokenCancelOffer':
			type = 'NFT Cancel offer';
			break;
		case 'NFTokenCreateOffer':
			type = 'NFT Offer';
			break;
		case 'NFTokenMint':
			type = 'NFT Mint';
			break;
		case 'OfferCancel':
			type = 'Offer cancel';
			break;
		case 'OfferCreate':
			type = 'Offer';
			break;
		case 'Payment':
			type = 'Payment';
			break;
		case 'PaymentChannelClaim':
			type = 'Payment channel claim';
			break;
		case 'PaymentChannelCreate':
			type = 'Payment channel';
			break;
		case 'PaymentChannelFund':
			type = 'Payment channel fund';
			break;
		case 'SetRegularKey':
			type = 'Set regular key';
			break;
		case 'SignerListSet':
			type = 'Signer list set';
			break;
		case 'TrustSet':
			type = 'Trust set';
			break;
		case 'EnableAmendment':
			type = 'Enable amendment';
			break;
		case 'TicketCreate':
			type = 'Ticket create';
			break;
		case 'SetFee':
			type = 'Set fee';
			break;
		default:
			type = txType;
			break;
	}
	return type.toUpperCase();
}
