import Editora from "../../models/editora.js";

describe("Testes do Modelo Editora", () => {
  const objetoEditora = {
    nome: "Lucas' publisher",
    cidade: "SJC",
    email: "LP@gmail.com",
  };
  it("Deve instanciar uma nova editora", () => {
    const editora = new Editora(objetoEditora);
    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });
});
