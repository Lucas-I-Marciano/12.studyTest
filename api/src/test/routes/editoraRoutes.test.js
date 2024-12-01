import app from "../../app.js";
import request from "supertest";
import { expect } from "@jest/globals";

const port = 3000;

let server;

beforeEach(() => {
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("GET em /editoras", () => {
  it("Deve retornar lista de editoras", async () => {
    const dado = await request(server)
      .get("/editoras")
      .expect("Content-Type", /json/)
      .expect(200); // expect do supertest

    expect(dado.body[0]["email"]).toStrictEqual(expect.any(String)); // expect normal
  });
});
