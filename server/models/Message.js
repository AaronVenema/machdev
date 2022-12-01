const { Schema, model } = require('mongoose');
const Employee = require("./Employee");
const MessageBoard = require("./MessageBoard");
const messageSchema = new Schema(
  {
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    body: {
        type: String,
    },
    likes:{
        type: Number
    },
    board:{
        type: Schema.Types.ObjectId,
        ref: 'MessageBoard'
    }

  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Message = model('Message', messageSchema);

module.exports = Message;
