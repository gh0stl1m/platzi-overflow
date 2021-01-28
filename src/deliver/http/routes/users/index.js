const Joi = require('joi');
const Boom = require('boom');

const { users } = require('../../../../adapters');

module.exports = [
  {
    method: 'POST',
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required().min(3),
          email: Joi.string().email().required(),
          password: Joi.string().required().min(6),
        }),
        failAction: req => Boom.badRequest('Validation error', req.payload),
      }
    },
    path: '/api/users',
    handler: users.register,
  }
];
