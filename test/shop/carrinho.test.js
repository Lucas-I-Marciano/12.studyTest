// Testar deve iniciar vazio
// Testar deve ter itens
// Testar deve conter
// Testar deve ter a propriedade
// Testar lançamento de erro
// Ver coverage
// Testar restante
import Carrinho from "../../shop/carrinho";

describe("Teste de Carrinho", () => {
  it("Deve iniciar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toEqual([]);
    expect(carrinho.frete).toBeNull();
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.total).toBeNull();
  });
});
