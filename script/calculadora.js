var lista = [0, "/", ".", "=", 1, 2, 3, "-", 4, 5, 6, "+", 7, 8, 9, "x"];

const main = document.createElement("div");
main.className = "main";
const area_button = document.createElement("div");
area_button.className = "area-button";
const result = document.createElement("input");
result.className = "result";
main.appendChild(result);
main.appendChild(area_button);
document.body.appendChild(main);
result.value = "";


// Bloqueador de botoes:
/*

  - Adicao do ID secundario "operador" em 
  todos os botoes operadores.
  - Criação do listener que acionara um 
  querySekectirAll para todos os botoes 
  do ativado ate seu anterior. 
  -Criação de IF para separar botoes com
  o ID "operador", e assim, bloqueando o 
  Botao.
  - Criação de If para botoes clicados sem
  o "operador." reabilitando todos os botoes.
  
  *è importantissimo fazer o de reabilitação 
  primeiro, assim, quando se desabilita os 
  botoes, eles se manterão assim ate o clique
  em um numero, o que torna o indice de erros
  muito menor, facilitando a utilização.

*/



for (var i = lista.length - 1; i > -1; i--) {
  const button = document.createElement("button");
  button.className = "calc-button";
  button.id = "id" + lista[i];
  button.innerHTML = lista[i];
  if (
    button.innerHTML.includes("+") ||
    button.innerHTML.includes("-") ||
    button.innerHTML.includes("x") ||
    button.innerHTML.includes("/") ||
    button.innerHTML.includes(".") ||
    button.innerHTML.includes("=")
  ) {
    button.id = button.id + ", operador";
    button.disabled = true;
    
  }
  area_button.appendChild(button);

  button.addEventListener("click", function disabilitada() {
    if (this.id.includes("id")) {
      let botoes = document.querySelectorAll("button");
      botoes.forEach(function (opUp) {
        opUp.disabled = false;
        opUp.style.backgroundColor = 'light-green';
      });
    }

    if (this.id.includes("operador")) {
      let botoes = document.querySelectorAll("button");
      botoes.forEach(function (opDown) {
        if (opDown.id.includes("operador")) {
          opDown.disabled = true;
        }
      });
    }
  });


// PROGRAMAÇÃO DA CALCULADORA

/* explicação
  - Cria-se um grid com operadores bloqueados quando 
  utilizados na tela, com a tela vazia e em seu final.
  - Só é possivel imputar a equação com um numero no final.

  1º passo: FOR i ----
  - A equação chega ao programa como String.
  - Separação completa de elementos. SPLIT("")
  - Junção de elementos numericos sequenciais. IF ELSE operadores
  
  2º passo: FOR x --
  - Contas matematicas feitas pela 
  substituição do simbolo com a resposta
  e depois o apagamento dos elementos conectados SPLICE(inicio, quantidade)


  */


  button.addEventListener("click", function input() {
    if (button.innerHTML == "=") {
      equacao = result.value; 
      let conta = [""];
      conta = equacao.split("");
      console.log(equacao);
      result.value = "";
  
    i=0;                      
    for (let i=1; i < conta.length; i++){
      
      if(conta[i].includes('/') || conta[i].includes('+') || conta[i].includes('-') || conta[i].includes('x') )
        {
          console.log('');
        }
      else if (conta[i - 1].includes('/') || conta[i - 1].includes('-') || conta[i - 1].includes('+')|| conta[i - 1].includes('x')){
        console.log('');
    
      }
      else{
        conta[i - 1] = conta[i - 1] + conta[i];
        conta.splice(i,1);
        i = i - 1
      }
    }
    console.log(conta)
  
  
  
    x=0;
    for (let x=1; x < conta.length; x++){
  
      
      if (conta[x].includes('/') || conta[x].includes('x')){
        if(conta[x].includes('x')){
          conta[x] = parseFloat(conta[x - 1]) * parseFloat(conta[x + 1]);
          conta.splice(x - 1, 1);
          conta.splice(x, 1);
        }
        console.log(conta);
        if(conta[x].includes('/')) {
          conta[x] = parseFloat(conta[x - 1]) / parseFloat(conta[x + 1]);
          conta.splice(x - 1, 1);
          conta.splice(x, 1);
        }
        
      } 
      console.log(conta);
  
    }
    y=0;
    for (let y=1; y < conta.length; y++){
      
      if ((conta[y].includes("+")) || (conta[y].includes("-"))){
        if(conta[y].includes('-')){
        
          conta[y] = parseFloat(conta[y - 1]) - parseFloat(conta[y + 1]);
          conta.splice(y - 1, 1);
          conta.splice(y, 1);
        }else if(conta[y].includes('+')) {
          conta[y] = parseFloat(conta[y - 1]) + parseFloat(conta[y + 1]);
          conta.splice(y - 1, 1);
          conta.splice(y, 1);
  
        }
        
      }
      console.log(conta)
      
      result.value = conta;
    }
  
    
  
  
    } else {
      result.value = result.value + button.innerHTML;
    }
  
  
  
  });
}