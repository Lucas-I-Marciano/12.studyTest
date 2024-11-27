import { contabilizaSalario, calculaDesconto } from "../02.index.js";

describe("Testes de Folha de Pagamento", () => {
  it("Desconto deve ser igual", () => {
    expect(2000).toBe(calculaDesconto(2500, 500));
  });

  it("Salario Total deve ser igual", () => {
    expect(3000).toBe(contabilizaSalario(2500, 500));
  });
});
