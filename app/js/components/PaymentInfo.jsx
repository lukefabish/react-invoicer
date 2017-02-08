import React from 'react';
import { InvoicerStore, InvoicerFields } from '../InvoicerStore';

export default class PaymentInfo extends React.Component {

  static get paymentInfo() {
    return {
      paymentInfo: 'Add payment method',
    };
  }

  constructor(props) {
    super(props);
    this.state = InvoicerStore.getValue(InvoicerFields.PAYMENT_INFO, PaymentInfo.defaultState);

    this.handlePaymentInfoChange = this.handlePaymentInfoChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    InvoicerStore.setValue(InvoicerFields.PAYMENT_INFO, nextState);
  }

  handlePaymentInfoChange(e) {
    this.setState({ paymentInfo: e.target.value });
  }

  render() {
    return (
      <div className="paymentInfo">
        <div><strong>Payment:</strong></div>
        <form id="paymentInfo">
          <input
            htmlFor="paymentInfo"
            type="text"
            placeholder="Add payment method"
            value={this.state.paymentInfo}
            onChange={this.handlePaymentInfoChange}
          />
        </form>
      </div>
    );
  }
}
