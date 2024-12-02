import Editora from "../../models/editora.js";
import { describe, expect, it, jest } from "@jest/globals";

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

  it.skip("Deve salvar no BD", async () => {
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

  it("Deve simular salvar no BD", () => {
    const editora = new Editora(objetoEditora);
    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: "Lucas' publisher",
      cidade: "SJC",
      email: "LP@gmail.com",
      created_at: "2024-10-10",
      updated_at: "2024-10-10",
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
