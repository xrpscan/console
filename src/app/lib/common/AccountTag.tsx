import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DestinationTag from './DestinationTag';
import { XrplNetwork, XrplNetworkUrls } from '../common/Constants';


const AccountTag = (props) => {
  const { name, link, minimal, amm, st, dt, network_id } = props;

  if (network_id === XrplNetwork.XahauMainnet) {
    return (
    <a href={`${XrplNetworkUrls.XahauMainnet}/account/${props.children}`} rel="noopener noreferrer nofollow" target="_blank">
      <span className='address-tag'>{props.children}</span>
    </a>
    )
  }

  /*
  * Compute what will be displayed as display name
  */
  let accountName = null;
  if (name && typeof name === 'object' && Object.keys(name).length > 0) {
    if (name.username)
      // accountName = <Tag minimal intent={Intent.WARNING}>~{name.username}</Tag>;
      accountName = <span className="address-name">~{name.username}</span>
    else if (name.name)
      // accountName = <Tag minimal intent={Intent.PRIMARY}>{name.name}{name.desc ? ` (${name.desc})` : ''}</Tag>;
      accountName = <span className="address-name">{name.name}{name.desc ? ` (${name.desc})` : ''}</span>
    else
      accountName = props.children;
  }
  else {
    accountName = props.children;
  }

  /*
  * Hyperlink or not?
  */
  let linkedAccountName = accountName;
  if (link) {
    const pageURL = amm ? 'amm' : 'account';
    linkedAccountName = <Link to={`/${pageURL}/${props.children}`}>{accountName}</Link>
  }

  /* 
  * Minimal style account name or full account address?
  */
  const styledLinkedAccountName = minimal ?
    <div className="address-tag">{linkedAccountName}</div> :
    linkedAccountName;

  /* 
  * Add SourceTag or DestinationTag if supplied.
  */
  const tag = (st >= 0) ? st : (dt >= 0) ? dt : undefined;
  const styledLinkedAccountNameTags = (tag >= 0) ?
     <span>{styledLinkedAccountName}&nbsp;<span><DestinationTag prefix={(st >= 0) ? 'ST:' : 'DT:'} tag={tag} /></span></span> :
     styledLinkedAccountName;

  return styledLinkedAccountNameTags;
}

AccountTag.defaultProps = {
  link: true,
  minimal: false,
  amm: false,
  network_id: 0,
}

AccountTag.propTypes = {
  name: PropTypes.object,
  link: PropTypes.bool,
  minimal: PropTypes.bool,
  amm: PropTypes.bool,
  st: PropTypes.number,
  dt: PropTypes.number,
  network_id: PropTypes.number,
}

export default AccountTag;