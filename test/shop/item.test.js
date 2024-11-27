import Item from "../../shop/item";

describe("Teste da classe Item", () => {
  it("Deve conter 3 elementos", () => {
    const item = new Item("Banana", 3.35, 35);

    expect(item.nome).toBe("Banana");
    expect(item.valor).toBe(3.35);
    expect(item.quantidade).toBe(35);
  });

  it("Deve retornar o valor total", () => {
    const item = new Item("Banana", 3.35, 35);
    expect(item.pegaValorTotalItem()).toBeCloseTo(117.25);
  });
});
