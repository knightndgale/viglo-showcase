import TestModel from "@/models/TestModel/test.model";
import { TestRepositoryInterface } from "./test.types";
import { TestType } from "@/models/TestModel/test.type";

class TestRepository implements TestRepositoryInterface {
  constructor() {}

  async retrieve() {
    try {
      const result = (await TestModel.find()) as TestType[];
      return result;
    } catch (error: Error | any) {
      return new Error(error);
    }
  }
}

export default TestRepository;
