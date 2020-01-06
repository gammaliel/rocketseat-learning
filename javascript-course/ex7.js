function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
var botao = document.getElementById('teste')
var parent = document.getElementById('parent')

botao.onclick = function () {
    console.log('teste')
    var head = document.createElement('div')
    head.setAttribute('class', 'square')
    head.style.width = '50px'
    head.style.height = '50px'

    head.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = getRandomColor()
    });
    // head.addEventListener('mouseout', (event) => {
    //     event.target.style.backgroundColor = 'white'
    // });


    parent.appendChild(head)
}


