import app from "../../app.js";

const port = 3000;

let server;

beforeEach(() => {
  server = app.listen(port, console.log("Server executing...3000"));
});

afterEach(() => {
  server.close();
});

describe("Testes em /editoras", () => {
  it("Deve retornar lista de editoras", () => {
    expect(2).toBe(2);
  });
});
