const num1 = document.querySelector(".numero1")
const percent = document.querySelector(".descuento")
const boton = document.querySelector(".calcular")
const cupon = document.querySelector(".cupon")
const valid = document.querySelector(".validar")

boton.addEventListener('click',calcular)
valid.addEventListener('click',validar)

/*calculo de descuento */
function calcular (){
    const valor1 = Number(num1.value)
    const valor2 = Number(percent.value)
    const precio = (valor1 * (100 - valor2))/100
    const respuesta = document.createElement('p')
    respuesta.innerText = precio
    document.body.appendChild(respuesta)
}
const cupones = {
    f4th3rsD4y: 10,
    m0th3rsD4y: 20
}

function validar (){
    
    if (cupones[cupon.value] == undefined){
        const mensaje = document.createElement('p')
        mensaje.innerText = 'cupon no valido'
        document.body.appendChild(mensaje)
    }else {percent.value = cupones[cupon.value]}
}