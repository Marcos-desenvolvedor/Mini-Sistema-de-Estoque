import { CadastraNovoProduto } from "../services/novoProduto.js";
import { lerNome, lerPreco, lerQuantidade } from "../prompts/lerPrompts.js";

export function fluxoCadastro() {
  const NomeProduto = lerNome("QUAL NOME DO PRODUTO: ");
  const PrecoProduto = Number(lerPreco("PRECO DO PRODUTO: "));
  const QuantidadeProduto = Number(lerQuantidade("QUANTIDADE DE PRODUTO: "));

  const novoProduto = {
    nome: NomeProduto,
    preco: PrecoProduto,
    quantidade: QuantidadeProduto,
  };

  CadastraNovoProduto(novoProduto);
}
