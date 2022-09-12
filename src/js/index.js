function popup(){
    let element = document.getElementById("phone")
    element.classList.toggle("active")
}
function popup2(){
    let element = document.getElementById("country")
    element.classList.toggle("active")
}
const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__mid-left__meadia')
const closer = document.querySelector('.close')

burger.addEventListener('click', function () {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})

closer.addEventListener('click', function () {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})
    