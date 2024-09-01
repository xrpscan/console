// import DestinationTag from './DestinationTag';

import { Flex, Link } from "@radix-ui/themes";
import { XrplNetworkUrls } from "./Constants";
import DestinationTag from "./DestinationTag";
import { IName } from "../definitions";

export interface IAccountTag {
  account: string,
  name: IName,
  link: boolean,
  minimal: boolean,
  st: number,
  dt: number,
  network_id: number,
}

const AccountTag = (props: any) => {
  const { account, name, link, minimal, st, dt, network_id } = props;

  // Account address or name?
  let accountName = account;
  if (typeof name?.username === "string") {
    accountName = `~${name?.username}`;
  }
  if (typeof name?.name === "string") {
    accountName = name?.name;
    if (typeof name?.desc === "string") {
      accountName = `${accountName} (${name?.desc})`;
    }
  }

  // Hyperlinked or plain?
  let linkedAccountName = accountName;
  if (link) {
    linkedAccountName = <Link href={`${XrplNetworkUrls.XrplMainnet}/account/${account}`} truncate target="_blank">{accountName}</Link>
  }

  // Minimal or full account address?
  let styledLinkedAccountName = linkedAccountName;
  if (minimal) {
    styledLinkedAccountName = <Flex maxWidth="128px">{linkedAccountName}</Flex>
  }

  // Destination tagged or plain?
  let styledLinkedAccountNameTags = styledLinkedAccountName;
  const tag = (st >= 0) ? st : (dt >= 0) ? dt : undefined;
  if (tag >= 0) {
    styledLinkedAccountNameTags = <Flex gap="1">
      {styledLinkedAccountName} 
      <DestinationTag prefix={st >= 0 ? "ST:" : "DT:"} tag={tag} />
    </Flex>
  }

  return styledLinkedAccountNameTags;
}

export default AccountTag;