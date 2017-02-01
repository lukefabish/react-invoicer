import React from 'react';
import ReactDOM from 'react-dom';
import LineItems from './components/LineItems';

const InvoiceIdentity = function invoiceIdentity() {
  return (
    <div className="invoiceIdentity">
      <h1>Invoice</h1>
    </div>);
};

class InvoiceMeta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bizName: 'Business Name',
    };
  }

  handleBizChange(e) {
    this.setState({ bizName: e.target.value });
  }

  render() {
    return (
      <div className="invoiceMeta">
        <form id="invoiceMetaForm">
          <input
            htmlFor="invoiceMetaForm"
            type="text"
            className="businessName"
            onChange={this.handleBizChange}
          />
          <label htmlFor="issueDate">Issue Date: </label>
          <input id="issueDate" htmlFor="invoiceMetaForm" type="text" placeholder="DD.MM.YYYY" />
          <label htmlFor="dueDate">Due Date: </label>
          <input id="dueDate" htmlFor="invoiceMetaForm" type="text" placeholder="DD.MM.YYYY" />
          <label htmlFor="invoiceNo">Invoice #: </label>
          <input id="invoiceNo" htmlFor="invoiceMetaForm" type="text" placeholder="YYYY-nnnn" />
          <label htmlFor="po">P.O. #: </label>
          <input id="po" htmlFor="invoiceMetaForm" type="text" placeholder="#nnnnnnnnn" />
        </form>
      </div>
    );
  }
}

const PaymentInfo = function paymentInfo() {
  return (
    <div className="paymentInfo">
      <div><strong>Payment:</strong></div>
      <form id="paymentInfo">
        <input htmlFor="paymentInfo" type="text" placeholder="Add payment method" />
      </form>
    </div>
  );
};

const ClientInfo = function clientInfo() {
  return (
    <div className="clientInfo">
      <div id="billTo"><strong>Bill To:</strong></div>
      <form id="clientInfoForm">
        <input
          htmlFor="clientInfoForm"
          type="text" id="companyName"
          placeholder="Client/Company Name"
        />
        <input
          htmlFor="clientInfoForm"
          type="text"
          id="address1"
          placeholder="Address 1"
        />
        <input
          htmlFor="clientInfoForm"
          type="text"
          id="address2"
          placeholder="Address 2"
        />
        <input
          htmlFor="clientInfoForm"
          type="text"
          id="phone"
          placeholder="555-5555-5555"
        />
        <input
          htmlFor="clientInfoForm"
          type="text"
          id="email"
          placeholder="client@example.com"
        />
        <input
          htmlFor="clientInfoForm"
          type="text"
          id="attn"
          placeholder="attn:Purchasing Officer"
        />
      </form>
    </div>
  );
};

const PayeeContact = function payeeContact() {
  return (
    <div className="payeeContact">
      <input type="text" placeholder="Address 1" />
      <input type="text" placeholder="Address 2" />
      <input type="text" placeholder="+5 (5)5 5555 5555" />
      <input type="text" placeholder="www.example.com" />
      <input type="text" placeholder="freelancer@example.com" />
    </div>
  );
};

const ThankyouNote = function thankyouNote() {
  return (
    <div className="thankyouNote">
      Thankyou!
      <div>We appreciate your business and it&#39;s</div>
      <div>been a pleasure working with you.</div>
    </div>
  );
};

const Footer = function footr() {
  return (
    <div className="footer">
      <PayeeContact />
      <ThankyouNote />
    </div>
  );
};

const Invoice = function invc() {
  return (
    <div className="invoice">
      <InvoiceIdentity />
      <InvoiceMeta />
      <PaymentInfo />
      <ClientInfo />
      <LineItems />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Invoice />,
  document.getElementById('content'),
);
