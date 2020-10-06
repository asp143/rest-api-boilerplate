jest.mock('../../src/db/helper/User.helper');

const { FindOneById } = require('../../src/function/User.function');

describe('User test Functions', () => {
    test('FindOneById fail because there is no user match', async (done) => {
        const result = await FindOneById('1');
        expect(result.status).toBe(404);
        done();
    });
});
