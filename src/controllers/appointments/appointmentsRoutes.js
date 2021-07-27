import { Router } from "express";
import AppointmentsController from "./appointmentsController.js";
import AppointmentValidation from "../../validation/AppointmentValidation.js";

const router = Router();
const appointmentsRoutes = (app) => {
  router
    .route("/:userId")
    .get(AppointmentsController.getAppointments);

  router
    .route("/")
    .post(AppointmentValidation.book(), AppointmentsController.bookAppointment);

  app.use("/appointments", router);
};

export default appointmentsRoutes;