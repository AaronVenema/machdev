const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//add icon per title
const employeeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    salary:{
        type: Number,
    },
    title:{
        type: String
    },
    firstName:{
      type: String
    },
    lastName:{
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

// hash user password
employeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
