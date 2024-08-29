import { Code } from "@radix-ui/themes";

interface IDestinationTag {
  prefix?: string,
  tag: string,
  suffix?: string,
}

const DestinationTag = (props: IDestinationTag) => {
  const { prefix, tag, suffix } = props;

  let renderedTag = tag;
  if (typeof prefix === "string") {
    renderedTag = `${prefix} ${renderedTag}`;
  }
  if (typeof suffix === "string") {
    renderedTag = `${renderedTag} ${suffix}`;
  }

  return (
    <Code variant="soft" color="gray">{renderedTag}</Code>
  )
}

export default DestinationTag;