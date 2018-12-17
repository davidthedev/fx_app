import React, { Component } from 'react';
import Panel from '../Panel';
import { generate } from '../utils/dataGenerator';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: generate()
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      data: generate()
    });
  }

  buildPanels() {
    return this.state.data.map((row, index) => {
      return <Panel
              key={index}
              currencyPair={row.pair}
              sellPrice={row.sell}
              buyPrice={row.buy} />;
    });
  }

  render() {
    return (
      <div className="c-grid">
        {this.buildPanels()}
      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateState(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
