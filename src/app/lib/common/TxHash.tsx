import { Code, Flex, Link } from "@radix-ui/themes";
import { XrplNetworkUrls } from "./Constants";

interface ITxHash {
    hash: string,
}

const TxHash = (props: ITxHash) => {
	const { hash } = props;
    if (typeof hash === 'string') {
        return <>
            <Flex maxWidth="120px">
                <Link href={`${XrplNetworkUrls.XrplMainnet}/tx/${hash}`} truncate target="_blank">
                    <Code variant="ghost">{hash}</Code>
                </Link>
            </Flex>
        </>
    } else {
        return <></>
    }
}

export default TxHash;