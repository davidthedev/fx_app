import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Arrow = ({ hasBuyPriceDecreased }) => {
  const classes = classNames(
    'c-arrow',
    {'c-arrow--down': hasBuyPriceDecreased},
    {'c-arrow--up': !hasBuyPriceDecreased}
  );

  return (
    <span className={classes}></span>
  );
}

export default Arrow;

Arrow.propTypes = {
  hasBuyPriceDecreased: PropTypes.bool
};
