const InvoicerStore = {

  setValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getValue(key, defaultVal = {}) {
    let val = JSON.parse(localStorage.getItem(key));

    if (val === null) {
      val = defaultVal;
    }

    if (typeof val === 'undefined') {
      val = defaultVal;
    }

    return val;
  },

};

const InvoicerFields = {
  INVMETA: 'invoice-meta',
  PAYMENT_INFO: 'payment_info',
  PAYEE_CONTACT: 'payee_contact',
  CLIENT_INFO: 'client_info',
  LINE_ITEMS: 'line_items',
  DATA_STORE_TAX: 'invoice-tax',
};

export { InvoicerStore, InvoicerFields };
