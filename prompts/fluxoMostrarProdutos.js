import { obterProdutos } from "../services/listarProdutos.js";

export function mostrarProdutos() {
  const produtos = obterProdutos();

  if (produtos.length === 0) {
    console.log("LISTA VAZIA");
    return;
  }

  console.log("LISTA DE PRODUTOS");

  for (const p of produtos) {
    console.log(
      `ID: ${p.id} | NOME: ${p.nome} | PREÇO: ${p.preco.toFixed(2)} | QTD: ${p.quantidade}`,
    );
    console.log("               ");
  }
}
