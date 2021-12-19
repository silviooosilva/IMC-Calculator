function calcula_IMC(altura, peso){
    const show_result = document.getElementById('imc')
    const peso_info = document.getElementsByClassName('info-imc')[0]
    //ESTILIZANDO QUANDO APARECER A INFORMAÇÃO
    peso_info.style.color = 'rgb(233, 251, 130)'
    peso_info.style.background = '#9735F7'
    peso_info.style.marginTop = "20px"
    peso_info.style.border = "2px solid rgb(233, 251, 130)"
    peso_info.style.padding = "7px"
    /* FIM DAS DECLARAÇÕES */
    const IMC = peso / Math.pow(2, altura); /*CALCULANDO A O IMC COM BASE NO PESO E ALTURA AO QUADRADO 
    FORMULA USADA PARA CALCULAR*/
    show_result.value = IMC.toFixed(2) //FORMATANDO O RESULTADO (APENAS DUAS CASAS DECIMAIS APÓS A VIRGULA(PONTO))
    if(IMC <= 18.5){
       peso_info.innerHTML = 'NÃO ESTÁ NO PESO IDEAL'
    }else if((IMC >= 18.6) && (IMC <= 24.9)){
        peso_info.innerHTML = 'PESO IDEAL'
    }else if((IMC >= 25) && (IMC <= 29.9)){
        peso_info.innerHTML = 'LEVEMENTE ACIMA DO PESO'
    }else if((IMC >= 30) && (IMC <= 34.9)){
        peso_info.innerHTML = 'OBESIDADE GRAU I'
    }else if((IMC >= 35) && (IMC <= 39.9)){
        peso_info.innerHTML = 'OBESIDADE GRAU II (SEVERA)'
    }else{
        peso_info.innerHTML = 'OBESIDADE GRAU III (MÓRBIDA)'
    }
}
function mode_change(){
  const mode = document.getElementById('mode')
  if(mode.checked){
    const body = document.getElementsByTagName('body')[0].style.background='#151515'
  }else{
    const body = document.getElementsByTagName('body')[0].style.background='#fff'
  }
}
const submit_button = document.getElementsByClassName('btn-submit')[0]
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
submit_button.addEventListener('click', ()=>{
  (calcula_IMC(altura.value, peso.value))
  
})
