import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "../Panel";
import Button from "../Button";
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

    if (!this.shouldRenderTiles) {
      return null;
    }

    return tiles.allIds.map((id, index) => {
      const quoteId = tiles.byId[id].quoteId;
      const quote = quotes.byId[quoteId];
      const { pair, baseCurrency, quoteCurrency, sell, buy } = quote;

      return (
        <Panel
          key={index}
          id={id}
          quoteId={quoteId}
          currencyPair={pair}
          baseCurrency={baseCurrency}
          sellPrice={sell}
          quoteCurreny={quoteCurrency}
          buyPrice={buy}
          updateTileById={(tileId, quoteId) =>
            dispatch(updateTileById(tileId, quoteId))
          }
        />
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
