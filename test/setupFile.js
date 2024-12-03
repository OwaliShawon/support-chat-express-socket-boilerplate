const { beforeAll, afterAll } = require('@jest/globals');
const mongoose = require('mongoose');
const { connectWithMongoDb, disconnectWithMongoDb } = require('../src/libraries/db');

beforeAll(async () => {
    await connectWithMongoDb();
});

afterAll(async () => {
    await disconnectWithMongoDb();
});

describe('Mongoose connection', () => {
    it('should be open', () => {
        expect(mongoose.connection.readyState).toBe(1); // Check the "connected" state
    });
});
