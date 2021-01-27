const bcrypt = require('bcrypt');

const register = (userModel) => async ({ name, email, password }) => {
  let user;
  const pwdHash = bcrypt.hashSync(password, 10);

  try {
    user = await userModel.create({ name, email, password: pwdHash });
  } catch (err) {
    console.error('Error creating user: ', err.message);
    throw new Error('Error creating user');
  }

  return user.id;
}

module.exports = { register };
