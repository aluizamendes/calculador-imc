const nome = document.getElementById("nome");
const altura =  document.getElementById("altura");
const peso = document.getElementById("peso");
const btnCalcular = document.getElementById("calcular");
const btnRecarregar = document.getElementById("recarregar");
const resultadoDiv = document.querySelector(".resultado-wrapper")
const resultadoP = document.querySelectorAll("[data-resultado]");

const resultadoTitle = resultadoP[0];
const resultadoImc = resultadoP[1];
const classificacao = resultadoP[2];

// começa com o input de nome selecionado
nome.focus();

btnCalcular.addEventListener("click", () => {
  resultadoDiv.style.display = "block";

  // se os campos estiverem vazios mensagem de erro
  if(altura.value == "" || peso.value == "" || altura.value == null || peso.value == null) {
    resultadoTitle.innerText = `É necessário informar os dados acima para calcular seu imc.`;

    resultadoImc.innerText = "";
    classificacao.innerText = "";
    btnRecarregar.style.display = "none";

  }

  else {
  // calcula imc
  let imc = peso.value / (altura.value * altura.value);

  resultadoTitle.innerText = `Seu IMC foi calculado!`;

  // se o valor do nome estiver vazio
  if(nome.value == "") {
    // exibe resultado na tela
    resultadoImc.innerText = `O seu imc é igual a: ${imc.toFixed(2)}.`;
  } 
  else {
    // exibe resultado na tela
    resultadoImc.innerText = `${nome.value}, o seu IMC é igual a: ${imc.toFixed(2)}.`;
  } 

  // exibir a classificação do imc
  if(imc <= 18.4 && imc >= 16) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Magreza.";
  }
  else if(imc >= 18.5 && imc < 25) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Peso ideal.";
  }
  else if(imc > 25 && imc < 30) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Sobrepeso, risco aumentado.";
  }
  else if(imc > 30 && imc < 35) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Obesidade Grau I, risco moderado.";
  }
  else if(imc > 35 && imc < 40) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Obesidade Grau II, risco grave.";
  }
  else if(imc > 40) {
    classificacao.innerHTML = "<strong>Classificação:</strong> Obesidade Grau III, risco muito grave!";
  }



  // limpa os valores do input
  nome.value = "";
  altura.value = "";
  peso.value = "";

  nome.disabled = true;
  altura.disabled = true;
  peso.disabled = true;
  btnCalcular.disabled = true;
  btnRecarregar.style.display = "block";


  }  
});
