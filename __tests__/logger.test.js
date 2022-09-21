'use strict';

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  it('Works as expected', async () => {

    let req = {};
    let res = {};
    let next = jest.fn();

    logger(req, res, next);
    expect(next).toBeCalled();
    // expect(request.method).toEqual('GET');
  });
});
