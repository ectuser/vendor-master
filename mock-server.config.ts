import {
  createMockServer,
  startMockServer,
  type MockServerConfig,
} from 'mock-config-server';

const { vendorsMock } = require('./mocks/vendors');
const { bankAccounts } = require('./mocks/bank-accounts');
const { contactPeople } = require('./mocks/contact-people');

const mockServerConfig: MockServerConfig = {
  interceptors: {
    request: (params) => params.setDelay(2000),
  },
  cors: {
    methods: ['DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
    origin: 'http://localhost:5111',
    allowedHeaders: ['accept', 'Content-Type'],
    exposedHeaders: ['accept', 'Content-Type'],
    credentials: true,
  },
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

createMockServer(mockServerConfig);
startMockServer(mockServerConfig);
