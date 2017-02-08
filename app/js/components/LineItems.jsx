import React from 'react';
import LineItem from './LineItem';
import Totals from './Totals';
import { InvoicerStore, InvoicerFields } from '../InvoicerStore';

export default class LineItems extends React.Component {

  static get emptyLineItem() {
    return { item: '', rate: 0, qty: 0 };
  }
  static get defaultState() {
    return {
      showNew: false,
      lineItems: [LineItems.emptyLineItem],
    };
  }

  constructor(props) {
    super(props);
    this.state = InvoicerStore.getValue(InvoicerFields.LINE_ITEMS,
                  LineItems.defaultState);

    this.showNew = this.showNew.bind(this);
    this.hideNew = this.hideNew.bind(this);
    this.updateLineItem = this.updateLineItem.bind(this);
    this.deleteLineItem = this.deleteLineItem.bind(this);
    this.emitLineItem = this.emitLineItem.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    InvoicerStore.setValue(InvoicerFields.LINE_ITEMS, nextState);
  }

  updateLineItem(idx, field, value) {
    const liCopy = this.state.lineItems.slice();
    liCopy[idx][field] = value;

    if (idx === this.state.lineItems.length - 1) {
      liCopy.push(LineItems.emptyLineItem);
    }

    this.setState({ lineItems: liCopy });
  }

  deleteLineItem(idx) {
    let finalLi;
    if (this.state.lineItems.length === 1) {
      finalLi = [];
      finalLi[0] = LineItems.emptyLineItem;
    } else {
      const liCopyPre = this.state.lineItems.slice(0, idx);
      const liCopyPost = this.state.lineItems.slice(idx + 1);
      finalLi = liCopyPre.concat(liCopyPost);
    }

    this.setState({ lineItems: finalLi });
  }

  showNew() {
    this.setState({ showNew: true });
  }

  hideNew(e) {
    const ele = e.toElement || e.relatedTarget;
    if (!ele || ele.className.indexOf('liData') >= 0) {
      return;
    }

    this.setState({ showNew: false });
  }

  emitLineItem(lineItem, idx) {
    const maxIdx = this.state.lineItems.length - 1;

    if (idx < maxIdx) {
      return (
        <LineItem
          key={idx}
          idx={idx}
          item={lineItem.item}
          rate={lineItem.rate}
          qty={lineItem.qty}
          updateFn={this.updateLineItem}
          delFn={this.deleteLineItem}
        />
      );
    }

    if (maxIdx === 0 || (idx === maxIdx && this.state.showNew)) {
      return (
        <LineItem
          key={idx}
          idx={idx}
          updateFn={this.updateLineItem}
          delFn={this.deleteLineItem}
        />
      );
    }

    return undefined;
  }

  render() {
    return (
      <div
        className="lineItems"
        onMouseOver={this.showNew}
        onMouseOut={this.hideNew}
      >
        <span className="item heading">Item</span>
        <span className="rate heading">Rate($)</span>
        <span className="qty heading">Qty</span>
        <span className="total heading">Total($)</span>
        {
          this.state.lineItems.map(this.emitLineItem)
        }
        <Totals lineItems={this.state.lineItems} />
      </div>
    );
  }

}
