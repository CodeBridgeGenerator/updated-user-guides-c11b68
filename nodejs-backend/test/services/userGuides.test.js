const assert = require('assert');
const app = require('../../src/app');

describe('\'userGuides\' service', () => {
  it('registered the service', () => {
    const service = app.service('userGuides');

    assert.ok(service, 'Registered the service (userGuides)');
  });
});
