import React from 'react';

export default class LineItem extends React.Component {

  static get propTypes() {
    return {
      item: React.PropTypes.string,
      rate: React.PropTypes.number,
      qty: React.PropTypes.number,
      updateFn: React.PropTypes.func,
      delFn: React.PropTypes.func,
      idx: React.PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      item: '',
      rate: 0,
      qty: 0,
      idx: 0,
      updateFn: undefined,
      delFn: undefined,
    };
  }

  constructor(props) {
    super(props);
    this.state = { showX: false };

    this.showX = this.showX.bind(this);
    this.hideX = this.hideX.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleItemChange(e) {
    this.props.updateFn(this.props.idx, 'item', e.target.value);
  }

  handleRateChange(e) {
    this.props.updateFn(this.props.idx, 'rate', parseFloat(e.target.value));
  }

  handleQtyChange(e) {
    this.props.updateFn(this.props.idx, 'qty', parseFloat(e.target.value));
  }

  deleteRow() {
    this.props.delFn(this.props.idx);
  }

  showX() {
    this.setState({ showX: true });
  }

  hideX(e) {
    const ele = e.toTarget || e.relatedTarget;
    if (!ele || ele.className.indexOf('delRow') >= 0) {
      return;
    }

    this.setState({ showX: false });
  }

  render() {
    return (
      <div
        className="lineItem"
        onMouseOver={this.showX}
        onMouseOut={this.hideX}
      >
        <input
          type="text"
          className="liData item"
          placeholder="New item"
          value={this.props.item}
          onChange={this.handleItemChange}
        />
        <input
          type="text"
          className="liData rate"
          placeholder="0.00"
          value={this.props.rate}
          onChange={this.handleRateChange}
        />
        <input
          type="text"
          className="liData qty"
          placeholder="0.0"
          value={this.props.qty}
          onChange={this.handleQtyChange}
        />
        <span className="liData total" >{ this.props.qty * this.props.rate }</span>
        {
          this.state.showX ? <button className="delRow" onClick={this.deleteRow}>X</button>
                           : null
        }
      </div>
    );
  }
}
