import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Code } from "@radix-ui/themes";

export const GlobalNotice = () => {
    return <>
    <Callout.Root variant="surface" className="pb-0 mb-3">
        <Callout.Icon>
            <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
            XRPSCAN Console beta is now available for testing. Values in <Code>Amount</Code> or similar fields (<Code>Fee</Code>, <Code>DeliverMax</Code>, <Code>BidMax</Code> etc.) may now be entered in XRP units.
        </Callout.Text>
    </Callout.Root>
    </>;
}