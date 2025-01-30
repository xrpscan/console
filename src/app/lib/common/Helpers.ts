import { LPTOKEN_PREFIX } from './Constants';

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
		case 'AMMClawback':
			type = 'AMM Clawback';
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

/**
* Return Bootstrap style name that may be applied to a given TxResult code
*
* @param (String) bsStyle
*/

export const getTxResultStyle = (txResult: string) => {
	let style='';
	const code = txResult.substring(0,3);
	switch (code) {
		case 'tec':
		case 'ter':
			style = 'warning';
			break;
		case 'tef':
		case 'tel':
		case 'tem':
			style = 'danger';
			break;
		case 'tes':
			style = 'success';
			break;
		default:
			break;
	}
	return style;
}

/** Convert 40 character HEX currency codes to ASCII codes
*
* @param (String) ASCII
*
* Reference: https://xrpl.org/currency-formats.html#currency-codes
*/

export const hex2ascii = (hex: string) => {
	const hexCode = hex.toString();
	let asciiCode = '';
	for (let i = 0; (i < hexCode.length && hexCode.substr(i, 2) !== '00'); i += 2) {
		asciiCode += String.fromCharCode( parseInt(hexCode.substr(i, 2), 16));
	}
	return asciiCode;
}

/**
 * Return correct human readable currency code, given ISO 4217 or HEX codes
 *
 * @param (String) ASCII
 */

export const currencyName = (code: string) => {
	if (code && code.length === 40) {
		if (code.startsWith('03')) {
			// return <>{LPTOKEN_PREFIX}&nbsp;{code.substring(0,4)}<XIcon icon="ellipsis" faStyle={'fas'} className={'ml-0 mr-0'}/>{code.substring(code.length - 4)}</>;
			return "LP TOKEN"
		} else {
			return hex2ascii(code);
		}
	} else {
		return (typeof code === 'string') ? code.substring(0,16) : code;
	}
}

/**
 * Return true if this TrustSet transaction sets a trustline, else return false
 */
interface ITrustlineTx {
    LimitAmount: {
        value: number,
    }
}

export const isTrustlineRemoved = (tx: ITrustlineTx) => {
    return Number(tx?.LimitAmount?.value) === 0 ? true : false
}

/**
 * Return human friendly error codes. Removes first 3 characters of the error
 * code and returns the rest.
 */
export const formatTransactionResult = (TransactionResult: string) => {
	return TransactionResult.slice(3);
}