import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Code } from "@radix-ui/themes";

export const GlobalNotice = () => {
    return <>
    <Callout.Root variant="surface" className="pb-0 mb-3">
        <Callout.Icon>
            <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
            XRPSCAN Console beta is now available for testing. In beta, XRP values in <Code>Amount</Code> and similar fields (<Code>Fee</Code>, <Code>DeliverMax</Code>, <Code>BidMax</Code> etc.) may be entered in XRP Drops unit. We&apos;ll switch to XRP units in the future.
        </Callout.Text>
    </Callout.Root>
    </>;
}