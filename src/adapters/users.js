const { users } = require('../useCases');

const register = async (req, h) => {
  const { name, email, password } = req.payload;

  try {
    await users.register({ name, email, password });
  } catch (err) {
    console.error('Error creating user: ', err.message);
    
    return h.response({ message: 'Error creating user '}).code(500);
  }

  return h.response({ message: 'User Created Successfully' }).code(201);
}


module.exports = {
  register,
};
