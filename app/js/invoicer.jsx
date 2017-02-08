import React from 'react';
import ReactDOM from 'react-dom';
import LineItems from './components/LineItems';
import InvoiceMeta from './components/InvoiceMeta';
import PaymentInfo from './components/PaymentInfo';
import ClientInfo from './components/ClientInfo';
import PayeeContact from './components/PayeeContact';

const InvoiceIdentity = function invoiceIdentity() {
  return (
    <div className="invoiceIdentity">
      <h1>Invoice</h1>
    </div>);
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
