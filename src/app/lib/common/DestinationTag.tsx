import React from 'react';
import PropTypes from 'prop-types';
import XBadge from './XBadge';


const DestinationTag = (props) => {
  const { prefix, tag, suffix } = props;

  let renderedTag = tag;
  if (prefix) {
    renderedTag = `${prefix} ${renderedTag}`;
  }
  if (suffix) {
    renderedTag = `${renderedTag} ${suffix}`;
  }

  return (
    <XBadge variant="secondary">{renderedTag}</XBadge>
  )
}

DestinationTag.defaultProps = {
  prefix: null,
  tag: '',
  suffix: null,
}

DestinationTag.propTypes = {
  tag: PropTypes.number.isRequired,
}

export default DestinationTag;