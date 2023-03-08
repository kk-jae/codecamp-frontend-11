import { server } from "./src/commons/mocks";

beforeAll(() => server.listen());
afterAll(() => server.close());

// 이에스린트 env에 jest: true 추가
