const { Schema, model } = require('mongoose');
const Message = require("./Message");
const boardSchema = new Schema(
  {
    messages:{
        type: [Schema.Types.ObjectId],
        ref: 'Messages'
    },
    projectid:{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }

  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const MessageBoard = model('MessageBoard', boardSchema);

module.exports = MessageBoard;
