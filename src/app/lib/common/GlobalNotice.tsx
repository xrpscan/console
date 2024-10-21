import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Code } from "@radix-ui/themes";

export const GlobalNotice = () => {
    return <>
    <Callout.Root variant="surface" className="pb-0 mb-3">
        <Callout.Icon>
            <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
            Advanced search engine for the XRPL. Values in <Code>Amount</Code> and similar fields (<Code>Fee</Code>, <Code>DeliverMax</Code>, <Code>BidMax</Code> etc.) may be entered in XRP units.
        </Callout.Text>
    </Callout.Root>
    </>;
}