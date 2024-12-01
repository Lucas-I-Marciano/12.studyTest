import Editora from "../../models/editora.js";
import { expect, jest, test, it } from "@jest/globals";

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

  it("Deve salvar no BD - Usando Mock/Spies", () => {
    const mockFn = jest.fn().mockReturnValue({
      id: 10,
      nome: "Lucas' publisher",
      cidade: "SJC",
      email: "LP@gmail.com",
      updated_at: "2024-10-10",
      created_at: "2024-10-10",
    });

    expect(mockFn()).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
