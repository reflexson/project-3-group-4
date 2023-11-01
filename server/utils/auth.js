//handles jwt tokens
const jwt = require('jsonwebtoken');

const secret = 'supergoodsecret';
const expiration = '2h';

//token structure is header.payload.signature
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // if token was taken from headers, last value is the token. ex: ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    //token doenot exist
    if (!token) {
      return req;
    }
    //verification returns decoded payload if valid
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  signToken: function ({ username, password, _id }) {
    const payload = { username, password, _id };
    // jwt.sign(payload, secret/Key, [options, callback])
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};