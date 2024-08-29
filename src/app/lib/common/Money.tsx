import { useFormatter } from 'next-intl';
import { Code, Flex, Link } from "@radix-ui/themes";
import { currencyName } from '../common/Helpers';
import { XrplNetworkUrls, NATIVE_CURRENCY } from './Constants';

/*
* Money tag to display currency values.
* 
* Usage: 

Simple: 
<Money value={Amount.value} />

With Issuer:
<Money
 	value={Amount.value}
 	currency={Amount.currency}
 	issuer={Amount.issuer}
/>
*
*/

export interface IMoney {
	value: number,
	currency: string,
	issuer: string,
	min?: number,
	max?: number,
	drops?: boolean,
}

const Money = (props: IMoney) => {
	const {
		value,
		currency,
		issuer,
		min,
		max,
		drops,
	} = props;
	const format = useFormatter();

	let totalvalue = (currency === NATIVE_CURRENCY && drops) ? value / 1000000 : value;
	/*
	* Transform hex currency code to human readable code
	*/
	let currencyWithIssuer = <>{currencyName(currency)}</>;
	if (issuer && currency && currency !== NATIVE_CURRENCY) {
		currencyWithIssuer = <Link href={`${XrplNetworkUrls.XrplMainnet}/account/${issuer}`} truncate target="_blank">{currencyWithIssuer}</Link>
	}

	return (
		<Code variant="ghost" color='gray'>
			{format.number(totalvalue)}
			{/* <FormattedNumber
				value={totalvalue}
				minimumFractionDigits={min}
				maximumFractionDigits={max}
			/> */}&nbsp;
			{currencyWithIssuer}
		</Code>
	)
}

export default Money;