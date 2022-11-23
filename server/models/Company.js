const { Schema, model } = require('mongoose');
const Department = require('./Department');
// import schema from Book.js
const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    departments: {
        type: [Department]
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//add virtual for total employees
//add virtual for total department

companySchema.virtual('departmentCount').get(function(){
    return this.departments.length;
});

companySchema.virtual('employeeCount').get(function(){
    let x = 0;
    this.departments.forEach((com) =>{
        x+=com.employeeCount;
    });
    return x;
    // return this.departments.length;
});




const Company = model('Company', companySchema);

module.exports = Company;
