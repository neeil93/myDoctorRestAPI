import { Doctor } from "../models/doctor.js";

const DoctorsService = {
  getDoctors: async (data, params, query, req, res) => {
    const perPage = 10;
    const page = data.page;
    Doctor.find()
      .limit(perPage)
      .skip(page ? perPage * (page-1) : 0)
      .sort(data.sort || {})
      .exec(function (err, doctors) {
        Doctor.count().exec(function (errCount, count) {
          res.status(200).send({
            data: doctors,
            page: page,
            pages: Math.ceil(count / perPage),
          });
        });
      });
  },
};

export default DoctorsService;
