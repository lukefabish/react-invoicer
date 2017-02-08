import React from 'react';
import { InvoicerStore, InvoicerFields } from '../InvoicerStore';

export default class ClientInfo extends React.Component {

  static get defaultState() {
    return {
      companyName: 'Client/Company Name',
      address1: 'Address 1',
      address2: 'Address 2',
      phone: '555-5555-5555',
      email: 'client@example.com',
      attn: 'attn:Purchasing Officer',
    };
  }

  constructor(props) {
    super(props);
    this.state = InvoicerStore.getValue(InvoicerFields.CLIENT_INFO, ClientInfo.defaultState);

    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleAddr1Change = this.handleAddr1Change.bind(this);
    this.handleAddr2Change = this.handleAddr2Change.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAttnChange = this.handleAttnChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    InvoicerStore.setValue(InvoicerFields.CLIENT_INFO, nextState);
  }

  handleCompanyNameChange(e) {
    this.setState({ companyName: e.target.value });
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

  handleAttnChange(e) {
    this.setState({ attn: e.target.value });
  }

  render() {
    return (
      <div className="clientInfo">
        <div id="billTo"><strong>Bill To:</strong></div>
        <form id="clientInfoForm">
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="companyName"
            placeholder="Client/Company Name"
            value={this.state.companyName}
            onChange={this.handleCompanyNameChange}
          />
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="address1"
            placeholder="Address 1"
            value={this.state.address1}
            onChange={this.handleAddr1Change}
          />
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="address2"
            placeholder="Address 2"
            value={this.state.address2}
            onChange={this.handleAddr2Change}
          />
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="phone"
            placeholder="555-5555-5555"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="email"
            placeholder="client@example.com"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            htmlFor="clientInfoForm"
            type="text"
            id="attn"
            placeholder="attn:Purchasing Officer"
            value={this.state.attn}
            onChange={this.handleAttnChange}
          />
        </form>
      </div>
    );
  }
}
