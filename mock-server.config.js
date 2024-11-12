/** @type {import('mock-config-server').MockServerConfig} */

const { vendorsMock } = require('./mocks/vendors');
const { bankAccounts } = require('./mocks/bank-accounts');
const { contactPeople } = require('./mocks/contact-people');

const mockServerConfig = {
  database: {
    data: {
      vendors: vendorsMock,
      'bank-accounts': bankAccounts,
      'contact-people': contactPeople,
      settings: {
        blocked: false,
      },
    },
  },
};

export default mockServerConfig;
