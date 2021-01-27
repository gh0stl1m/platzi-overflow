const Joi = require('@hapi/joi');
const Joi = require('@hapi/joi');

const { users } = require('../../../../adapters');

module.exports = [
  {
    method: 'POST',
    options: {
      validate: {
        payload: {
          name: Joi.string().required().min(3),
          email: Joi.string().email().required(),
          password: Joi.string().required().min(6),
        }
      }
    },
    path: '/api/users',
    handler: users.register,
  }
];
