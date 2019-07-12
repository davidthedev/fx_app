import React, { Component } from "react";
import Indicator from "../Indicator";
import Arrow from "../Arrow";
import config from "../../config/default";

import Select from "react-select";

export default class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicatorInFocus: null,
      hasBuyPriceDecreased: false
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleMouseOver(e) {
    const action = e.currentTarget.dataset.id;

    this.setState({
      indicatorInFocus: action
    });
  }

  handleMouseOut(e) {
    this.setState({
      indicatorInFocus: null
    });
  }

  buildIndicator(isSellIndicator = true) {
    const { currencyPair, sellPrice, buyPrice } = this.props;

    if (typeof isSellIndicator !== "boolean") {
      return null;
    }

    const price = isSellIndicator ? sellPrice : buyPrice;
    const variant = isSellIndicator ? "sell" : "buy";
    const primaryCurrency = currencyPair.substring(0, 3);

    return (
      <Indicator
        currency={primaryCurrency}
        value={price}
        variant={variant}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        indicatorInFocus={this.state.indicatorInFocus}
      />
    );
  }

  renderCurrencyPair() {
    const { quoteId, id } = this.props;
    const options = [];

    config.supportedQuoteIds.map(supportedQuoteId => {
      const label = supportedQuoteId.toUpperCase();
      options.push({ quoteId: supportedQuoteId, label, tileId: id });
    });

    const selectedValue = { quoteId, label: quoteId.toUpperCase(), tileId: id };

    const customStyles = {
      option: (styles, { isDisabled, isFocused }) => {
        return {
          ...styles,
          color: "black",
          backgroundColor: isDisabled ? null : isFocused ? "#def4ff" : null
        };
      }
    };

    return (
      <div className="c-panel__head">
        <Select
          options={options}
          className={"c-list-options"}
          onChange={this.handleOnChange}
          styles={customStyles}
          defaultValue={selectedValue}
        />
      </div>
    );
  }

  handleOnChange(opts) {
    this.props.updateTileById(opts.tileId, opts.quoteId);
  }

  render() {
    return (
      <div className="c-panel">
        {this.renderCurrencyPair()}
        <div className="c-panel__body">
          {this.buildIndicator()}
          <Arrow hasBuyPriceDecreased={this.state.hasBuyPriceDecreased} />
          {this.buildIndicator(false)}
        </div>
        <div className="c-panel__foot" />
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.buyPrice > this.props.buyPrice) {
      this.setState({
        hasBuyPriceDecreased: true
      });
    } else if (prevProps.buyPrice < this.props.buyPrice) {
      this.setState({
        hasBuyPriceDecreased: false
      });
    }
  }
}
