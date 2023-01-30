// Variables
const formularioPrincipal = document.querySelector('form')

let btnSubmit = document.querySelector('.calculo');
const inputValorFactura = document.querySelector('.price-factura');
const inputUserShare = document.querySelector('.user');
let selectionService = document.querySelector('select');

let numFactura;
let numUser;
let numService;


formularioPrincipal.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    
    numFactura = parseInt(inputValorFactura.value);
    numUser = parseInt(inputUserShare.value);
    numService = parseInt(selectionService.value);
    
    if(numFactura <= 0 || numUser<= 0 || numService === '0') {
        inputValorFactura.value = '';
        inputUserShare.value = '';
        alert('Los valores deben ser mayores a cero');
    } else if(numFactura === ' ' || numUser === ' ' || selectionService.value === '0') {
        alert('Los valores no pueden ir vacios')
    } else {
        btnSubmit.classList.add('desactivado')
        inputValorFactura.value = '';
        inputUserShare.value = '';
        const salida = document.querySelector('.outinput');
        salida.classList.add('spinner-active')
    
        setInterval(() =>{ 
            salida.remove()
        }, 3000)
        operation()
    }
})   

function operation () {

    
    let cantidadPropina = numFactura * selectionService.value
    let cantidadTotal = numFactura + cantidadPropina;
    let cadaUser = cantidadTotal / numUser
    

    function innerHTML () {
        document.querySelector('.monto').innerHTML = `Monto total: $${cantidadTotal}`;
        document.querySelector('.propina').innerHTML = `Cantidad de propina: $${cantidadPropina}`;
        document.querySelector('.cadaPersona').innerHTML = `Cada persona: $${parseInt(cadaUser)}`
    }
    setInterval(() => {
        innerHTML()
    }, 3000)
}




