import { lerProdutos, salvarProdutos } from "../data/database.js";

export function deletarPorId(idParaDeletar) {
  const produtos = lerProdutos();

  const listaFiltrada = produtos.filter((p) => p.id !== idParaDeletar);

  if (produtos.length === listaFiltrada.length) {
    return { sucesso: false, mensagem: "ID NÃO ENCONTRADO" };
  }

  salvarProdutos(listaFiltrada);
  return { sucesso: true, mensagem: "PRODUTO REMOVIDO COM SUCESSO" };
}
