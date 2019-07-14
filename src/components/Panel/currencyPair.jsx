import React, { Component } from "react";
import Select from "react-select";
import config from "../../config/default";

export default class CurrencyPair extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.quoteId !== nextProps.quoteId;
  }

  handleOnChange(opts) {
    this.props.updateTileById(opts.tileId, opts.quoteId);
  }

  renderCurrencyPairList() {
    const { quoteId, tileId } = this.props;

    const options = [];

    config.supportedQuoteIds.map(supportedQuoteId => {
      const label = supportedQuoteId.toUpperCase();
      options.push({ quoteId: supportedQuoteId, label, tileId });
    });

    const selectedValue = { quoteId, label: quoteId.toUpperCase(), tileId };

    const customStyles = {
      option: (styles, { isDisabled, isFocused }) => {
        return {
          ...styles,
          color: "#000000",
          backgroundColor: isDisabled ? null : isFocused ? "#def4ff" : null
        };
      }
    };

    return (
      <Select
        options={options}
        className={"c-list-options"}
        onChange={this.handleOnChange}
        styles={customStyles}
        defaultValue={selectedValue}
      />
    );
  }

  render() {
    return <div className="c-panel__head">{this.renderCurrencyPairList()}</div>;
  }
}
