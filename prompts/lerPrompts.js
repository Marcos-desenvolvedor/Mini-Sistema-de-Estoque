import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function lerNome(valor) {
  while (true) {
    const nomeProduto = prompt(valor);

    if (nomeProduto === "") {
      console.log("NOME INVÁLIDO");
      continue;
    }
    return nomeProduto;
  }
}

export function lerPreco(valor) {
  while (true) {
    const precoProduto = prompt(valor);

    if (precoProduto === "" || isNaN(precoProduto)) {
      console.log("PREÇO INVÁLIDO");
      continue;
    }

    if (precoProduto < 0) {
      console.log("PREÇO INVÁLIDO");
      continue;
    }
    return precoProduto;
  }
}

export function lerQuantidade(valor) {
  while (true) {
    const quantidadeProduto = prompt(valor);

    if (quantidadeProduto === "" || isNaN(quantidadeProduto)) {
      console.log("VALOR INVÁLIDO");
      continue;
    }

    if (quantidadeProduto < 0) {
      console.log("QUANTIDADE INVÁLIDA");
      continue;
    }
    return quantidadeProduto;
  }
}
