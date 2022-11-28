const { Schema, model } = require('mongoose');
const serviceSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    request: {
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

const Service = model('Service', serviceSchema);

module.exports = Service;
