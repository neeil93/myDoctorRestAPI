import { Client } from "../models/client.js";

const UserService = {
  getUsers: async () => {
    return new Promise((resolve, reject) => {
      Client.find({}).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      const user = new Client(data);
      user.save((err) => {
        if (err) reject(err);
        resolve("Created successfully");
      });
    });
  },
  updateUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
};

export default UserService;
