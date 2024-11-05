import { useEffect } from "react";

function ProdutoListar() {
  useEffect(() => {
    pesquisarProdutos();
  });

  function pesquisarProdutos() {
    fetch("http://localhost:5085/api/produto/listar")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        console.table(produtos);
      });
  }

  return <h1>Lista de Produtos</h1>;
}

export default ProdutoListar;

//EXERCÍCIOS
//1 - Exibir a lista de produtos no HTML
//2 - Cadastrar um produto na API
