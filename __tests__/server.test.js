'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Basic API Server', () => {
  it('Handles bad routes', async () => {
    const response = await request.get('/catchAll');
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });

  it('Handles bad methods', async () => {
    const response = await request.delete('/foo');
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });

  it('Handles \'/person\' route without query param correctly', async () => {
    const response = await request.get('/person');
    console.log(`response message : ${JSON.stringify(response)}`);
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Name Not Found.');
  });

  it('Handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query('name=Fred');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual(`name: Fred`);
  });
});
