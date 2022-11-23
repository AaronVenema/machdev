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
    workers: {
        type: [Employee]
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    completed: {
        type: Boolean,
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
