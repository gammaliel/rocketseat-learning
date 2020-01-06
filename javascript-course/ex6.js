var botao = document.getElementsByName('test')[0]
var body = document.getElementsByTagName('body')[0]
botao.onclick = function () {
    var head = document.createElement('div')
    // var textNode = document.createTextNode('this is a text node')
    head.setAttribute('class', 'squares')
    body.appendChild(head)
}
