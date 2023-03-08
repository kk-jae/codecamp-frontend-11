import { setupServer } from "msw/node";
import { apis } from "./apis";

export const server = setupServer(...apis); // 원본이 변경되지 않게 복사
