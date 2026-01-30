import { mostrarProdutos } from "./prompts/fluxoMostrarProdutos.js";
import { fluxoCadastro } from "./prompts/fluxoCadastraProduto.js";
import { deletarProduto } from "./prompts/fluxoDeletarProduto.js";
import { fluxoEditar } from "./prompts/fluxoEditorProduto.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function menu() {
  while (true) {
    console.log(`---SISTEMA DE ESTOQUE---
              
  1 - CADASTRAR PRODUTO
  2 - LISTAR PRODUTOS 
  3 - DELETAR PRODUTO
  4 - ATUALIZAR PRODUTO
  5 - SAIR`);

    const opcao = prompt("OPÇÃO: ");

    switch (opcao) {
      case "1":
        fluxoCadastro();
        break;

      case "2":
        mostrarProdutos();
        break;

      case "3":
        deletarProduto();
        break;
      case "4":
        fluxoEditar();
        break;

      case "5":
        console.log("SAINDO");
        return;

      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

menu();
