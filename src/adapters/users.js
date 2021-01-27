const register = (req, h) => {
  console.log('User Info: ', req.payload);
  return h.response('User created').code(201);
}


module.exports = {
  register,
};
