const { Schema, model } = require('mongoose');
const Employee = require('./Employee');
// import schema from Book.js
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    workers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      }
    ],
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Project = model('Project', projectSchema);

module.exports = Project;
