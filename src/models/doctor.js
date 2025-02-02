import mongoose from 'mongoose';
const { Schema } = mongoose;

const doctorSchema = new Schema({
  firstName:  String,
  lastName: String,
  practicingFrom: Date,
  specializations: [Schema.Types.ObjectId],
  gender: {
      type: String,
      enum: ['MALE', 'FEMALE'],
      default: 'MALE',
  },
  qualifications: [{
      name: String,
      instituteName: String,
      procurementYear: String
  }],
  consultationFee: Number,
  consultationFeeCurrency: {
      type: String,
      enum: ['INR', 'USD'],
      default: 'INR'
  },
  services: [{name: String}],
  reviews: [{
      clientId: String,
      isAnonymous: Boolean,
      rating: String,
      review: String,
      isDoctorRecommended: Boolean,
      data: Date
  }],
  experience: [
      {
          hospitalName: String,
          yearsWorked: Number,
          role: String
      }
  ],
  availableSlots: [{
      date: Date,
      time: [{
          startTime: String,
          endTime: String
      }],
      status: String,
  }],
    : [Number, Number],
});

export const Doctor = mongoose.model('Doctor', doctorSchema);