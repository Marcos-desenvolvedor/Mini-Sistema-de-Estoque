import { lerID, lerNome, lerPreco, lerQuantidade } from "./lerPrompts.js";
import { atualizarProduto } from "../services/editarProduto.js";

export function fluxoEditar() {
  console.log("--- EDIÇÃO DE PRODUTO ---");
  const id = Number(lerID("ID DO PRODUTO QUE DESEJA EDITAR: "));

  const nome = lerNome("NOVO NOME: ");
  const preco = Number(lerPreco("NOVO PREÇO: "));
  const quantidade = Number(lerQuantidade("NOVA QUANTIDADE: "));

  const resultado = atualizarProduto(id, { nome, preco, quantidade });

  if (resultado.sucesso) {
    console.log(resultado.mensagem);
  } else {
    console.log(resultado.mensagem);
  }
}
