const {
    users,
    findUser,
    deleteUser
  } = require('./users');

describe ("users Functionality", () => {
    test('Returns the correct user Object back on passing an ID to find function', async() => {
        const user = await findUser(2);
        expect(user.id).toBe(2);
    });
    test('Returns the correct user id back on passing an ID to delete function', async() => {
        const {id} = await deleteUser(2);
        expect(id).toBe(2);
    });
})
