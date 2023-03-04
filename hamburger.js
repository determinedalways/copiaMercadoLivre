function clickHamburger() {

const menu = document.getElementById ('icone-menu')
const menuNav = document.getElementById('categorias')
const menuNav1 = document.getElementById('menuNav1')
const menuNav2 = document.getElementById('menuNav2')
const menuNav3 = document.getElementById('menuNav3')
const menuNav4 = document.getElementById('menuNav4')
const menuNav5 = document.getElementById('menuNav5')
if( menuNav.style.display == 'flex') {
    menuNav.style.display = 'none'
    menuNav1.style.display = 'none'
    menuNav2.style.display = 'none'
    menuNav3.style.display = 'none'
    menuNav4.style.display = 'none'
    menuNav5.style.display = 'none'

}
else {
    menuNav.style.display = 'flex'
    menuNav1.style.display = 'flex'
    menuNav2.style.display = 'flex'
    menuNav3.style.display = 'flex'
    menuNav4.style.display = 'flex'
    menuNav5.style.display = 'flex'
}

}

// var a = 1;

// function clickHamburger () { 
//     const menu = document.getElementById = 'icone-menu'
//     if(a == 1) {
//     menu.style.display = 'none'
//     a = 0
// }
// else {
//     menu.style.display ='flex'
//     a = 1
// }


// }