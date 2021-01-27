const serverStatus = (_, h) => h.response({ message: 'Server Running' }).code(200);

module.exports = {
  serverStatus,
};
