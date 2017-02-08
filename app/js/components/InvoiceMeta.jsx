import React from 'react';
import { InvoicerStore, InvoicerFields } from '../InvoicerStore';

export default class InvoiceMeta extends React.Component {

  static get defaultState() {
    return {
      businessName: 'Business Name',
      issueDate: 'DD.MM.YYYY',
      dueDate: 'DD.MM.YYYY',
      invoiceNo: 'YYYY.nnnn',
      poNo: '#nnnnnnnnn',
    };
  }

  constructor(props) {
    super(props);
    this.state = InvoicerStore.getValue(InvoicerFields.INVMETA, InvoiceMeta.defaultState);

    this.handleBizChange = this.handleBizChange.bind(this);
    this.handleIssueDateChange = this.handleIssueDateChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleInvoiceNoChange = this.handleInvoiceNoChange.bind(this);
    this.handlePoNoChange = this.handlePoNoChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    InvoicerStore.setValue(InvoicerFields.INVMETA, nextState);
  }

  handleBizChange(e) {
    this.setState({ businessName: e.target.value });
  }

  handleIssueDateChange(e) {
    this.setState({ issueDate: e.target.value });
  }

  handleDueDateChange(e) {
    this.setState({ dueDate: e.target.value });
  }

  handleInvoiceNoChange(e) {
    this.setState({ invoiceNo: e.target.value });
  }

  handlePoNoChange(e) {
    this.setState({ poNo: e.target.value });
  }

  render() {
    return (
      <div className="invoiceMeta">
        <form id="invoiceMetaForm">
          <input
            htmlFor="invoiceMetaForm"
            type="text"
            className="businessName"
            value={this.state.businessName}
            onChange={this.handleBizChange}
          />
          <label htmlFor="issueDate">Issue Date: </label>
          <input
            id="issueDate"
            htmlFor="invoiceMetaForm"
            type="text"
            placeholder="DD.MM.YYYY"
            value={this.state.issueDate}
            onChange={this.handleIssueDateChange}
          />
          <label htmlFor="dueDate">Due Date: </label>
          <input
            id="dueDate"
            htmlFor="invoiceMetaForm"
            type="text"
            placeholder="DD.MM.YYYY"
            value={this.state.dueDate}
            onChange={this.handleDueDateChange}
          />
          <label htmlFor="invoiceNo">Invoice #: </label>
          <input
            id="invoiceNo"
            htmlFor="invoiceMetaForm"
            type="text"
            placeholder="YYYY-nnnn"
            value={this.state.invoiceNo}
            onChange={this.handleInvoiceNoChange}
          />
          <label htmlFor="po">P.O. #: </label>
          <input
            id="po"
            htmlFor="invoiceMetaForm"
            type="text"
            placeholder="#nnnnnnnnn"
            value={this.state.poNo}
            onChange={this.handlePoNoChange}
          />
        </form>
      </div>
    );
  }
}
