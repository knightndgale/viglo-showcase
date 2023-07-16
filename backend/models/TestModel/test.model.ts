import { Schema, model, models, Model } from "mongoose";

import { TestType } from "./test.type";
const testSchema = new Schema<TestType>({
  name: String,
  email: {
    type: String,
    required: true,
  },
});

const TestModel = models.Test || model("Test", testSchema);

export default TestModel;
