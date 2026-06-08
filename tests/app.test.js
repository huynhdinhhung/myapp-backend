const request = require("supertest");
const app = require("../src/app");

describe("Backend API", () => {
  test("GET /health should return service status", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      service: "myapp-backend"
    });
  });

  test("GET /api/hello should return hello message", async () => {
    const res = await request(app).get("/api/hello");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      message: "Hello from backend"
    });
  });
});
