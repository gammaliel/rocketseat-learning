var nomes = ["Diego", "Gabriel", "Lucas"];

var list = document.getElementById('unordered');
nomes.forEach(elem => {
    console.log(elem);
    var child = document.createElement('li');
    child.textContent = elem;
    list.appendChild(child);
});