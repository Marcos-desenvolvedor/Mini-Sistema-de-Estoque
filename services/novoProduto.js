import { lerProdutos, salvarProdutos } from "../data/database.js";

export function CadastraNovoProduto({ nome, preco, quantidade }) {
  const estoque = lerProdutos();

  const id = estoque.length > 0 ? estoque[estoque.length - 1].id + 1 : 1;

  const produto = { id, nome, preco, quantidade };

  estoque.push(produto);
  salvarProdutos(estoque);
}
