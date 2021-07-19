import mongoose from 'mongoose';
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  clientId:  Schema.Types.ObjectId,
  doctorId: Schema.Types.ObjectId,
  date: Date,
  startTime: String,
  endTime: String,
  appointmentStatus: {
    type: String,
    enum : ['NOT_STARTED','IN_PROGRESS','COMPLETED'],
    default: 'NOT_STARTED'
 },
  transactionDate: Date,
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);