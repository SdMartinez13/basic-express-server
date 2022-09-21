'use strict';

const validator = require('../src/middleware/validator');
const supertest = require('supertest');
const { app } = require('../src/server');

const request = supertest(app);

describe('Validator Middleware', () => {
  it('Handles routes with name queries', async () => {

    let req = {};
    let res = {};
    let next = jest.fn();

    const response = await request.get('/person');
    // expect(next).toHaveBeenCalled();
    expect(response.status).toBe(500);
  });
});
