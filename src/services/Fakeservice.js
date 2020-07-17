import { platformApi } from "../utils/api";

export default class FakeService {
  static fakerGetApi(start, callback, error, next) {
    start();
    return platformApi.get("/").then(callback).catch(error).finally(next);
  }

  static fakerPostApi(payload, start, callback, error, next) {
    start();
    return platformApi
      .post("/", payload)
      .then(callback)
      .catch(error)
      .finally(next);
  }
}
