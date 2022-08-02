import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

/* Creating a new schema for the activity model. */
const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export default model("Activity", activitySchema);