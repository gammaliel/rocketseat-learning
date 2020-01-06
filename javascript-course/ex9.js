function adicionar() {
    var texto = document.getElementById('nome');
    var lista = document.getElementById('nomes');
    
    var content = document.createElement('li');
    content.textContent = texto.value;
    console.log(content);
    lista.appendChild(content);
    texto.value = "";
}