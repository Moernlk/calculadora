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
