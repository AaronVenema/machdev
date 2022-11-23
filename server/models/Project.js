const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
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
