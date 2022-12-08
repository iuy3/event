

class Menu {

handleEvent(event){
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1)
    this[method](event)
}


onMousedown(){
    alert(button777 = 'мышка нажата')
}


onMouseup(){
   alert( button777 += '.....отжата')
}



}



let menu = new Menu()

button777.addEventListener('mousedown', menu)
button777.addEventListener('mouseup', menu)