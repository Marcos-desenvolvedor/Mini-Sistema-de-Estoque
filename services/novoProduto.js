import { lerProdutos, salvarProdutos } from "../data/database.js";

export function CadastraNovoProduto({ nome, preco, quantidade }) {
  const estoque = lerProdutos();
  const produto = { nome, preco, quantidade };

  estoque.push(produto);
  salvarProdutos(estoque);
}
