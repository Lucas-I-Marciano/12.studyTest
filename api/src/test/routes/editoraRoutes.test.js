import app from "../../app.js";
import request from "supertest";
import { describe, expect } from "@jest/globals";

const port = 3001;

let server;

beforeEach(() => {
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("GET em /editoras", () => {
  it("Deve retornar lista de editoras", async () => {
    const dado = await request(app)
      .get("/editoras")
      .expect("Content-Type", /json/)
      .expect(200); // expect do supertest

    expect(dado.body[0]["email"]).toStrictEqual(expect.any(String)); // expect normal
  });

  it("Deve retornar uma e apenas uma editora", async () => {
    const dado = await request(app)
      .get("/editoras/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(dado.body[0]).toBeUndefined();
  });
});

describe("POST em /editoras", () => {
  it("Deve criar uma editora", async () => {
    const response = await request(app)
      .post("/editoras")
      .send({ nome: "Ateliê", cidade: "São Paulo", email: "a@a.com" })
      .expect(201);
  });
});
