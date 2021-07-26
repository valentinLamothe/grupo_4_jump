const iconoInfo = document.getElementById('iconoInfo');
const productImg = document.getElementById('productImg');
const productDescrip = document.getElementById('productDescrip')
const precio = document.getElementById('precio')
const cajaProductoHome = document.getElementById('cajaProductoHome')
const description = document.getElementById('description')
const cardInfoContainer = document.getElementById('cardInfoContainer')

const iconoInfo2 = document.getElementById('iconoInfo2')
const productImg2 = document.getElementById('productImg2')
const productDescrip2 = document.getElementById('productDescrip2')
const precio2 = document.getElementById('precio2')
const cajaProductoHome2 = document.getElementById('cajaProductoHome2')
const description2 = document.getElementById('description2')
const cardInfoContainer2 = document.getElementById('cardInfoContainer2')

const iconoInfo3 = document.getElementById('iconoInfo3')
const productImg3 = document.getElementById('productImg3')
const productDescrip3 = document.getElementById('productDescrip3')
const precio3 = document.getElementById('precio3')
const cajaProductoHome3 = document.getElementById('cajaProductoHome3')
const description3 = document.getElementById('description3')
const cardInfoContainer3 = document.getElementById('cardInfoContainer3')

const iconoInfo4 = document.getElementById('iconoInfo4')
const productImg4 = document.getElementById('productImg4')
const productDescrip4 = document.getElementById('productDescrip4')
const precio4 = document.getElementById('precio4')
const cajaProductoHome4 = document.getElementById('cajaProductoHome4')
const description4 = document.getElementById('description4')
const cardInfoContainer4 = document.getElementById('cardInfoContainer4')

const iconoInfo5 = document.getElementById('iconoInfo5')
const productImg5 = document.getElementById('productImg5')
const productDescrip5 = document.getElementById('productDescrip5')
const precio5 = document.getElementById('precio5')
const cajaProductoHome5 = document.getElementById('cajaProductoHome5')
const description5 = document.getElementById('description5')
const cardInfoContainer5 = document.getElementById('cardInfoContainer5')

const iconoInfo6 = document.getElementById('iconoInfo6')
const productImg6 = document.getElementById('productImg6')
const productDescrip6 = document.getElementById('productDescrip6')
const precio6 = document.getElementById('precio6')
const cajaProductoHome6 = document.getElementById('cajaProductoHome6')
const description6 = document.getElementById('description6')
const cardInfoContainer6 = document.getElementById('cardInfoContainer6')

var elementosEstanVisibles = true
iconoInfo.addEventListener('click', () => {
    if(elementosEstanVisibles){
        productImg.className = 'display-none'
        description.className = 'descripcion'
        
        elementosEstanVisibles = false
    } else {
        productImg.className = 'product-img'
        description.className = 'display-none'
        
        elementosEstanVisibles = true
    }
})

var elementosEstanVisibles2 = true
iconoInfo2.addEventListener('click', () => {
    if(elementosEstanVisibles2){
        productImg2.className = 'display-none'
        description2.className = 'descripcion'

        elementosEstanVisibles2 = false
    } else {
        productImg2.className = 'product-img'
        description2.className = 'display-none'
        
        elementosEstanVisibles2 = true
    }
})

var elementosEstanVisibles3 = true
iconoInfo3.addEventListener('click', () => {
    if(elementosEstanVisibles3){
        productImg3.className = 'display-none'
        description3.className = 'descripcion'

        elementosEstanVisibles3 = false
    } else {
        productImg3.className = 'product-img'
        description3.className = 'display-none'

        elementosEstanVisibles3 = true
    }
})

var elementosEstanVisibles4 = true
iconoInfo4.addEventListener('click', () => {
    if(elementosEstanVisibles4){
        productImg4.className = 'display-none'
        description4.className = 'descripcion'

        elementosEstanVisibles4 = false
    } else {
        productImg4.className = 'product-img'
        description4.className = 'display-none'
        
        elementosEstanVisibles4 = true
    }
})
var elementosEstanVisibles5 = true
iconoInfo5.addEventListener('click', () => {

    if(elementosEstanVisibles5){
        productImg5.className = 'display-none'
        description5.className = 'descripcion'

        elementosEstanVisibles5 = false
    } else {
        productImg5.className = 'product-img'
        description5.className = 'display-none'
        
        elementosEstanVisibles5 = true
    }
})

var elementosEstanVisibles6 = true
iconoInfo6.addEventListener('click', () => {

    if(elementosEstanVisibles6){
        productImg6.className = 'display-none'
        description6.className = 'descripcion'

        elementosEstanVisibles6 = false
    } else {
        productImg6.className = 'product-img'
        description6.className = 'display-none'

        elementosEstanVisibles6 = true
    }
})


// Carrusel Index

let firstBall = document.querySelector('#ball-1');
let banner = document.querySelector('.banner');

var vistaDeImagen = true;
firstBall.addEventListener('click', () => {
    console.log('primera bola');
    
    if(vistaDeImagen) {
        banner.className = 'visibility: hidden'
        vistaDeImagen = false;
    } else {
        vistaDeImagen = true;
        banner.className = 'banner'
    }
    
})


// Mini banner

var myVar = setInterval(setColor, 1200);

function setColor() {
    var fontColor = document.querySelector('.mini-banner-top');
    fontColor.style.backgroundColor = fontColor.style.backgroundColor == 'black' ? 'rgb(96, 48, 9)' : 'black  ';
}

function stopColor() {
    clearInterval(myBar);
}

