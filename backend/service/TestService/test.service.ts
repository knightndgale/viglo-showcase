import { TestRepositoryInterface } from "@/repository/TestRepository/test.types";

class TestService {
  repository: TestRepositoryInterface;
  constructor(repository: TestRepositoryInterface) {
    this.repository = repository;
  }

  async Tests() {
    const result = this.repository.retrieve();
    return result;
  }
}

export default TestService;
