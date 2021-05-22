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
        cardInfoContainer.style.transition = 'all 0ms ease'
        cardInfoContainer.style.transform = 'rotateY(360deg)'
        productImg.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer.style.transition = 'all 0.9s ease'
        cardInfoContainer.style.transform = 'rotateY(180deg)'
        productImg.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description.className = 'display-none'
        elementosEstanVisibles = true
    }
})

var elementosEstanVisibles = true
iconoInfo2.addEventListener('click', () => {
    if(elementosEstanVisibles){
        cardInfoContainer2.style.transition = 'all 0ms ease'
        cardInfoContainer2.style.transform = 'rotateY(360deg)'
        productImg2.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description2.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer2.style.transition = 'all 0.9s ease'
        cardInfoContainer2.style.transform = 'rotateY(180deg)'
        productImg2.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description2.className = 'display-none'
        elementosEstanVisibles = true
    }
})

var elementosEstanVisibles = true
iconoInfo3.addEventListener('click', () => {
    if(elementosEstanVisibles){
        cardInfoContainer3.style.transition = 'all 0ms ease'
        cardInfoContainer3.style.transform = 'rotateY(360deg)'
        productImg3.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description3.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer3.style.transition = 'all 0.9s ease'
        cardInfoContainer3.style.transform = 'rotateY(180deg)'
        productImg3.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description3.className = 'display-none'
        elementosEstanVisibles = true
    }
})

var elementosEstanVisibles = true
iconoInfo4.addEventListener('click', () => {
    if(elementosEstanVisibles){
        cardInfoContainer4.style.transition = 'all 0ms ease'
        cardInfoContainer4.style.transform = 'rotateY(360deg)'
        productImg4.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description4.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer4.style.transition = 'all 0.9s ease'
        cardInfoContainer4.style.transform = 'rotateY(180deg)'
        productImg4.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description4.className = 'display-none'
        elementosEstanVisibles = true
    }
})
var elementosEstanVisibles = true
iconoInfo5.addEventListener('click', () => {

    if(elementosEstanVisibles){
        cardInfoContainer5.style.transition = 'all 0ms ease'
        cardInfoContainer5.style.transform = 'rotateY(360deg)'
        productImg5.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description5.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer5.style.transition = 'all 0.9s ease'
        cardInfoContainer5.style.transform = 'rotateY(180deg)'
        productImg5.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description5.className = 'display-none'
        elementosEstanVisibles = true
    }
})

var elementosEstanVisibles = true
iconoInfo6.addEventListener('click', () => {

    if(elementosEstanVisibles){
        cardInfoContainer6.style.transition = 'all 0ms ease'
        cardInfoContainer6.style.transform = 'rotateY(360deg)'
        productImg6.className = 'display-none'
        // productDescrip.className = 'display-none'
        // precio.className = 'display-none'
        description6.className = 'descripcion'

        elementosEstanVisibles = false
    } else {
        cardInfoContainer6.style.transition = 'all 0.9s ease'
        cardInfoContainer6.style.transform = 'rotateY(180deg)'
        productImg6.className = 'product-img'
        // productDescrip.className = 'product-descrip'
        // precio.className = 'hola'
        description6.className = 'display-none'
        elementosEstanVisibles = true
    }
})