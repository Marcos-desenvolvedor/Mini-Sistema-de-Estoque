import fs from "fs";

const PATH = "./data/banco.json";

export function lerProdutos() {
  const texto = fs.readFileSync(PATH, "utf-8");
  return JSON.parse(texto);
}

export function salvarProdutos(listaAtualizada) {
  const texto = JSON.stringify(listaAtualizada, null, 2);

  fs.writeFileSync(PATH, texto);
}
