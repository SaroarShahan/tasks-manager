const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'A task must have a value'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', taskSchema);
