const { Schema, model } = require('mongoose');
const Employee = require('./Employee');
const Project = require('./Project');
//Add icon field from react icons
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
        type: [Schema.Types.ObjectId],
        ref: "Employee"
    },
    currentProjects:{
      type: [Schema.Types.ObjectId],
      ref: "Project"
    },
    completedProjects: {
      type: [Schema.Types.ObjectId],
      ref: "Project"
    },
    icon:{
      type: String
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
