import { Code, Flex, Link, Text } from "@radix-ui/themes";

interface ITxHash {
    hash: string,
}

const TxHash = (props: ITxHash) => {
	const { hash } = props;
    if (typeof hash === 'string') {
        return <>
            <Flex maxWidth="120px">
                <Link href={`https://xrpscan.com/tx/${hash}`} truncate target="_blank"><Code variant="ghost">{hash}</Code></Link>
            </Flex>
        </>
    } else {
        return <></>
    }
}

export default TxHash;