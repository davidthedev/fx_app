import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "../Panel";
import Button from "../Button";
import CurrencyPair from "../Panel/currencyPair";

import { getDataStream } from "../../actions/stream";
import { addTile, updateTileById } from "../../actions/tiles";
import config from "../../config/default";

export class Grid extends Component {
  componentDidMount() {
    this.props.dispatch(getDataStream());
  }

  shouldRenderTiles() {
    const { tiles, quotes } = this.props;

    if (!tiles.allIds.length || !quotes.allIds.length) {
      return false;
    }
  }

  renderTiles() {
    const { quotes, tiles, dispatch } = this.props;

    if (this.shouldRenderTiles()) {
      return null;
    }

    return tiles.allIds.map((id, index) => {
      const quoteId = tiles.byId[id].quoteId;
      const quote = quotes.byId[quoteId];

      const {
        currencyPair,
        baseCurrency,
        quoteCurrency,
        buyPrice,
        sellPrice
      } = quote;

      return (
        <div key={index} className="c-panel">
          <CurrencyPair
            key={`${quoteId}_${index}`}
            tileId={id}
            quoteId={quoteId}
            updateTileById={(tileId, quoteId) =>
              dispatch(updateTileById(tileId, quoteId))
            }
          />
          <Panel
            key={`${id}_${index}`}
            id={id}
            currencyPair={currencyPair}
            baseCurrency={baseCurrency}
            sellPrice={sellPrice}
            quoteCurreny={quoteCurrency}
            buyPrice={buyPrice}
          />
        </div>
      );
    });
  }

  handleOnClickEvent() {
    this.props.dispatch(addTile(config.defaultQuoteId));
  }

  renderButton() {
    return (
      <div className="c-options">
        <Button
          text={"Add tile"}
          handleOnClickEvent={() => this.handleOnClickEvent()}
        />
      </div>
    );
  }

  render() {
    const { quotes } = this.props;

    if (!quotes.isFetching) {
      return (
        <div>
          {this.renderButton()}
          <div className="c-grid">{this.renderTiles()}</div>
        </div>
      );
    } else {
      return <div className="c-loader">Loading...</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    tiles: state.tiles
  };
};

export default connect(mapStateToProps)(Grid);
