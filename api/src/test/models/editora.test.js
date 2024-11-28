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

  it("Deve salvar no BD", async () => {
    const editora = new Editora(objetoEditora);
    const dados = await editora.salvar(editora);

    expect(dados).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
