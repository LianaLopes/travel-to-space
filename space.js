const menu = document.getElementById('menu')
menu.style.maxHeight = "0px"
console.log(menu)

function showMenu() {
    if(menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "120px"
    } else {
        menu.style.maxHeight = "0px"
    }
}