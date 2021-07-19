import jwt from 'jsonwebtoken';
import { errorResponse, successResponse } from './responseHandler.js';

export function checkToken(req, res, next) {
  next();//Bypassing authentication for timebeing
  return;
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    let key = 'secret'
    jwt.verify(token, key, {
      ignoreExpiration: true
    }, (err, decoded) => {
      if (err) {
        return res.status(414).send(errorResponse(414));
      } else {
        if (key === 'secret') {
          decoded.isAdminUser = false;
        } else {
          decoded.isAdminUser = true;
        }
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(415).send(errorResponse(415));
  }
}
