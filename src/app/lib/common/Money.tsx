import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { currencyName } from '../common/Helpers';

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
const Money = (props) => {
	const {
		value,
		currency,
		issuer,
		min,
		max,
		drops,
	} = props;

	let totalvalue = (currency === 'XRP' && drops) ? value / 1000000 : value;
	/*
	* Transform hex currency code to human readable code
	*/
	let currencyWithIssuer = currencyName(currency);
	if (issuer && currency && currency !== "XRP") {
		currencyWithIssuer = <Link to={`/account/${issuer}`}>{currencyWithIssuer}</Link>
	}

	return (
		<span className="money">
			<FormattedNumber
				value={totalvalue}
				minimumFractionDigits={min}
				maximumFractionDigits={max}
			/>&nbsp;{currencyWithIssuer}
		</span>
	)
}

Money.defaultProps = {
	currency: "XRP",
	issuer: null,
	min: 0,
	max: 6,
	drops: false,
}

Money.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number.isRequired,
		PropTypes.string.isRequired,
	]),
	currency: PropTypes.string,
	issuer: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	drops: PropTypes.bool,
}

export default Money;