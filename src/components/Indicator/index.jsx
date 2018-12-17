import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SELL = 'sell';
const BUY = 'buy';

export default class Indicator extends Component {
  constructor(props) {
    super(props);

    this.buildValue = this.buildValue.bind(this);
    this.buildCurrency = this.buildCurrency.bind(this);
  }

  buildCurrency() {
    const { variant, currency } = this.props;

    if (typeof variant !== 'string' || variant === '') return;

    const firstChar = variant.charAt(0).toUpperCase();
    const restOfChars = variant.substring(1, variant.length);

    return (
      <div className="c-indicator__currency">
        {`${firstChar}${restOfChars} ${currency}`}
      </div>
    );
  }

  buildValue() {
    const { value } = this.props;

    if (!value) return;

    const partOne = value.substring(0, 4);
    const partTwo = value.substring(4, 6);
    const partThree = value.substring(6, 7);

    return (
      <div className="c-indicator__value">
        <span className="c-indicator__value--normal">{partOne}</span>
        <span className="c-indicator__value--large">{partTwo}</span>
        <span className="c-indicator__value--top">{partThree}</span>
      </div>
    );
  }

  render() {
    const { variant, indicatorInFocus, onMouseOver, onMouseOut } = this.props;

    const indicatorClasses = classNames(
      'c-indicator',
      {'c-indicator--sell': variant === SELL},
      {'c-indicator--sell-blur': indicatorInFocus === null && variant === SELL},
      {'c-indicator--sell-focus': indicatorInFocus === SELL && variant === SELL},
      {'c-indicator--buy': variant === BUY},
      {'c-indicator--buy-blur': indicatorInFocus === null && variant === BUY},
      {'c-indicator--buy-focus': indicatorInFocus === BUY && variant === BUY},
      {'c-indicator--blur': indicatorInFocus !== null && indicatorInFocus !== variant}
    );

    return (
      <div className={indicatorClasses}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        data-id={variant}>
        {this.buildCurrency()}
        {this.buildValue()}
      </div>
    );
  }
}

Indicator.propTypes = {
  value: PropTypes.string,
  currency: PropTypes.string,
  variant: PropTypes.oneOf(['sell', 'buy']),
  indicatorInFocus: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOver: PropTypes.func
};
