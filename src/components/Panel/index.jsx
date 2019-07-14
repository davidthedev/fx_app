import React, { Component } from "react";
import Indicator from "../Indicator";
import Arrow from "../Arrow";

export default class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicatorInFocus: null,
      hasBuyPriceDecreased: false
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
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

  render() {
    return (
      <React.Fragment>
        <div className="c-panel__body">
          {this.buildIndicator()}
          <Arrow hasBuyPriceDecreased={this.state.hasBuyPriceDecreased} />
          {this.buildIndicator(false)}
        </div>
        <div className="c-panel__foot" />
      </React.Fragment>
    );
  }
}
