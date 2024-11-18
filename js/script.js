const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resultado = document.getElementById('calculate')
const total = document.getElementById('total')

resultado.addEventListener('click',function(){
     a = Number(altura.value)
     p = Number(peso.value)
     r = total.value

    calculo = p/(a*a)

    if( calculo<18.5){
        total.textContent =` Seu IMC deu ${calculo.toFixed(2)} você esta magro`
    }else if(25<calculo>18,5){
         total.textContent =` Seu IMC deu ${calculo.toFixed(2)} você esta no peso normal`
    }
    else if(30<calculo>25){
         total.textContent =` Seu IMC deu ${calculo.toFixed(2)} você esta acima do peso`
    }if(calculo>30){
         total.textContent =` Seu IMC deu ${calculo.toFixed(2)} você esta obeso`
    }
})
