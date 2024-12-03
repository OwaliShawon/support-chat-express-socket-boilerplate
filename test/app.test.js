const mongoose = require('mongoose');
const { startServer, stopServer } = require('../src/server');
const request = require('supertest');
const app = require('../src/app');

beforeAll(async () => {
    startServer();
});

afterAll(async () => {
    stopServer();
});

describe('App', () => {
    it('should return 200 for the health endpoint', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    });
});
