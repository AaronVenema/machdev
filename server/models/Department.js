const { Schema, model } = require('mongoose');
const Employee = require('./Employee');
// import schema from Book.js
const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    workers: {
        type: [Employee]
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

departmentSchema.virtual('employeeCount').get(function(){
    return this.workers.length;
});

const Department = model('Department', departmentSchema);

module.exports = Department;
