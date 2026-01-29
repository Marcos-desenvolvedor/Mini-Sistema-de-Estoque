import { lerProdutos } from "../data/database.js";

export function obterProdutos() {
  const produtos = lerProdutos();

  return produtos;
}
