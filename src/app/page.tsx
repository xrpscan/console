import { Box, Button, Callout, Code, Flex, Heading, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from '@radix-ui/react-icons';
import QBuilder from "./lib/qbuilder/qbuilder";
import { Container } from "react-bootstrap";
import { Card } from "@radix-ui/themes";
import Features from "./features";

export default function Home() {
  return (
    <>
      <Container className="pb-2">
        <Callout.Root variant="soft" >
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text className="mb-0">
              XRPSCAN Console is available for beta testing and feedback.
            </Callout.Text>
          </Callout.Root>
      </Container>

      <Container className="py-4">
      <Heading size="5" className="">Search all XRPL transactions</Heading>
      <Card variant="classic">
          <QBuilder/>
          <Box>
            <Button variant="solid" size="2" mt="4" className="">Search &rarr;</Button>
          </Box>
        </Card>
      </Container>

      <Container className="py-5 m-1">
        <Features/>
      </Container>
    </>
  );
}
