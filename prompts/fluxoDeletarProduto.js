import { deletarPorId } from "../services/deletarProduto.js";
import { lerID } from "./lerPrompts.js";

export function deletarProduto() {
  const IdProduto = Number(lerID("ID PARA DELETAR: "));

  const resultado = deletarPorId(IdProduto);

  if (resultado.sucesso) {
    console.log(resultado.mensagem);
  } else {
    console.log(resultado.mensagem);
  }
}
