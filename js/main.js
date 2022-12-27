const nome = document.getElementById("nome");
const altura =  document.getElementById("altura");
const peso = document.getElementById("peso");
const btnCalcular = document.getElementById("calcular");
const resultadoTitle = document.querySelector(".titulo-resultado");
const resultadoTxt = document.querySelector(".resultado");
const resultadoClassificacao = document.querySelector(".resultado-classificacao");

// começa com o input de nome selecionado
nome.focus();

btnCalcular.addEventListener("click", () => {

  // se os campos estiverem vazios mensagem de erro
  if(altura.value == "" || peso.value == "" || altura.value == null || peso.value == null) {
    resultadoTitle.innerText = `É necessário informar os dados acima para calcular seu imc.`;
  }

  else {
  // calcula imc
  let imc = peso.value / (altura.value * altura.value);

  resultadoTitle.innerText = `Seu IMC foi calculado!`;

  // se o valor do nome estiver vazio
  if(nome.value == "") {
    // exibe resultado na tela
    resultadoTxt.innerText = `O seu imc é igual a: ${imc.toFixed(2)}`;
  } 
  else {
    // exibe resultado na tela
    resultadoTxt.innerText = `${nome.value}, o seu IMC é igual a: ${imc.toFixed(2)}`;
  } 

  // exibir a classificação do imc
  if(imc <= 16.9 && imc >= 16) {

    resultadoClassificacao.innerText = "Classificação";
  }

  // limpa os valores do input
  nome.value = "";
  altura.value = "";
  peso.value = "";

  }  
});
