import { TestType } from "@/models/TestModel/test.type";

export interface TestRepositoryInterface {
  retrieve: () => Promise<Partial<TestType[]> | Error>;
}
