import React from 'react';
import { InvoicerStore, InvoicerFields } from '../InvoicerStore';

export default class PayeeContact extends React.Component {

  static get defaultState() {
    return {
      address1: 'Address 1',
      address2: 'Address 2',
      phone: '555-5555-5555',
      email: 'freelancer@example.com',
      web: 'www.example.com',
    };
  }

  constructor(props) {
    super(props);
    this.state = InvoicerStore.getValue(InvoicerFields.PAYEE_CONTACT, PayeeContact.defaultState);

    this.handleAddr1Change = this.handleAddr1Change.bind(this);
    this.handleAddr2Change = this.handleAddr2Change.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWebChange = this.handleWebChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    InvoicerStore.setValue(InvoicerFields.PAYEE_CONTACT, nextState);
  }

  handleAddr1Change(e) {
    this.setState({ address1: e.target.value });
  }

  handleAddr2Change(e) {
    this.setState({ address2: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleWebChange(e) {
    this.setState({ web: e.target.value });
  }

  render() {
    return (
      <div className="payeeContact">
        <input
          type="text"
          placeholder="Address 1"
          value={this.state.address1}
          onChange={this.handleAddr1Change}
        />
        <input
          type="text"
          placeholder="Address 2"
          value={this.state.address2}
          onChange={this.handleAddr2Change}
        />
        <input
          type="text"
          placeholder="+5 (5)5 5555 5555"
          value={this.state.phone}
          onChange={this.handlePhoneChange}
        />
        <input
          type="text"
          placeholder="www.example.com"
          value={this.state.web}
          onChange={this.handleWebChange}
        />
        <input
          type="text"
          placeholder="freelancer@example.com"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </div>
    );
  }
}

