import { getTxTypeStyle, getTxTypeLabel } from './Helpers';
import { Code } from '@radix-ui/themes';

interface ITxType {
    type: string,
}

const TxType = (props: ITxType) => {
	const { type } = props;
	return (
		<Code variant="soft" color={ getTxTypeStyle(type) } className='text-nowrap'>{ getTxTypeLabel(type) }</Code>
	)
}

export default TxType;