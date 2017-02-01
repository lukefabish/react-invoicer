import React from 'react';

export default class Totals extends React.Component {

  static get defaultProps() {
    return {
      lineItems: [],
    };
  }

  static get propTypes() {
    return {
      lineItems: React.PropTypes.array,
    };
  }

  static zeroDef(val) {
    if (!val || isNaN(val)) {
      return 0;
    }

    return val;
  }

  constructor(props) {
    super(props);
    this.state = { tax: 0 };

    this.calcSubTotal = this.calcSubTotal.bind(this);
    this.handleTaxChange = this.handleTaxChange.bind(this);
  }

  calcSubTotal() {
    let lsub = 0;

    for (let i = 0; i < this.props.lineItems.length; i += 1) {
      lsub += (Totals.zeroDef(this.props.lineItems[i].rate) *
                Totals.zeroDef(this.props.lineItems[i].qty));
    }

    return lsub;
  }

  handleTaxChange(e) {
    this.setState({ tax: e.target.value });
  }

  render() {
    return (
      <div className="totals">
        <div className="totalLabel">Sub-total:</div>
        <span className="subtotal totalValue numeric">{this.calcSubTotal()}</span>

        <div className="totalLabel">Tax:</div>
        <input
          className="tax numeric"
          type="text"
          placeholder="0.0"
          onChange={this.handleTaxChange}
        />
        <span>%</span>

        <div className="totalLabel finalTotal">Total:</div>
        <span className="totalValue finalTotal numeric">{
          parseFloat(this.calcSubTotal() + (this.calcSubTotal() * (this.state.tax / 100))) }
        </span>
      </div>
    );
  }
}
