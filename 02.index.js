const contabilizaSalario = (salario, horaExtra) => {
  return salario + horaExtra;
};

const calculaDesconto = (salario, descontos) => salario - descontos;

function verifiqueSe(valor) {
  const assercoes = {
    ehExatamente: (esperado) => {
      if (valor != esperado) {
        throw new Error("Valores Diferentes");
      }
    },
    ehMenor: (esperado) => {
      if (valor >= esperado) {
        throw new Error("Valor maior que o esperado");
      }
    },
  };
  return assercoes;
}

function teste(titulo, funcao) {
  try {
    funcao();
    console.log(`${titulo} Passou!`);
  } catch (erro) {
    console.error(`${titulo} não passou!!! ${erro.message}`);
  }
}

teste("calculaDesconto", () => {
  verifiqueSe(2000).ehExatamente(calculaDesconto(2500, 500));
});
teste("contabilizaSalario", () => {
  verifiqueSe(2000).ehExatamente(contabilizaSalario(123123, 500));
});
teste("contabilizaSalario", () => {
  verifiqueSe(2000).ehMenor(contabilizaSalario(123123, 500));
});
