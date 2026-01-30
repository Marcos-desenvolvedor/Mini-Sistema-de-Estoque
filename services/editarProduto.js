import { lerProdutos, salvarProdutos } from "../data/database.js";

export function atualizarProduto(id, novosDados) {
  const produtos = lerProdutos();
  let encontrado = false;

  const listaAtualizada = produtos.map((p) => {
    if (p.id === id) {
      encontrado = true;

      return { id, ...novosDados };
    }
    return p;
  });

  if (!encontrado) {
    return { sucesso: false, mensagem: "ID NÃO ENCONTRADO" };
  }

  salvarProdutos(listaAtualizada);
  return { sucesso: true, mensagem: "PRODUTO ATUALIZADO COM SUCESSO" };
}
