import mongoose from 'mongoose';

const { Schema } = mongoose;

export const EmployerSchema = new Schema({
  name: String,
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  }],
  employee_count: Number,
});

export const EmployeeSchema = new Schema({
  name: String,
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'Employer',
  },
});

export const Employer = mongoose.model('Employer', EmployerSchema);
export const Employee = mongoose.model('Employee', EmployeeSchema);
