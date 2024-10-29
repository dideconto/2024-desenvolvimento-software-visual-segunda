import { useEffect } from "react";

function ConsultarCEP() {
  useEffect(() => {
    //Evento de carregamento do componente
    //Executar código ao abrir carregar o componente
    //AXIOS - Biblioteca de requisições

    fetch("https://viacep.com.br/ws/01001000/json/")
      .then((resposta) => {
        return resposta.json();
      })
      .then((endereco) => {
        console.log(endereco.localidade);
      });
  });

  return (
    <div>
      <h1>Consultar CEP</h1>
    </div>
  );
}

export default ConsultarCEP;

//EXERCÍCIOS
//1 - Exibir os dados no HTML/Página
//2 - Realizar a requisição para a sua API
//3 - Resolver o problema de CORS
//4 - Exibir a lista de produtos no HTML
