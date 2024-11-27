import Carrinho from "../../shop/carrinho";
import Item from "../../shop/item.js";

describe("Teste de Carrinho", () => {
  it("Deve iniciar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toEqual([]);
    expect(carrinho.frete).toBeNull();
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it("Deve conter itens", () => {
    const carrinho = new Carrinho();
    const item = new Item("Banana", 7, 2);
    const item2 = new Item("Manga", 4, 4);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
    expect(item.pegaValorTotalItem()).toBe(14);
  });

  it("Deve adicionar Frete", () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(200);

    expect(carrinho.frete).toBe(200);
  });

  it("Deve conter a propriedade frete, itens, subtotal e total", () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty("frete");
    expect(carrinho).toHaveProperty("itens");
    expect(carrinho).toHaveProperty("subtotal");
    expect(carrinho).toHaveProperty("total");
  });

  it("Deve lançar erro", () => {
    const carrinho = new Carrinho();
    expect(() => {
      carrinho.finalizaCompra();
    }).toThrow();
    expect(() => {
      carrinho.finalizaCompra();
    }).toThrow("Carrinho de compras vazio");
  });

  it("Deve calcular valor final", () => {
    const carrinho = new Carrinho();
    const item = new Item("Banana", 7, 2);
    const item2 = new Item("Manga", 4, 4);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    expect(carrinho.calculaTotal()).toBe(30);
  });

  it("Deve finalizar carrinho", () => {
    const carrinho = new Carrinho();
    const item = new Item("Banana", 7, 2);
    const item2 = new Item("Manga", 4, 4);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(20);
    expect(carrinho.finalizaCompra()).toEqual({
      subtotal: 30,
      frete: 20,
      total: 50,
    });
  });
});
