const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var idades = usuarios.map((item) => {
    return item.idade;
})

var over_eighteen = usuarios.filter((item) => {
    return item.idade >= 18;
})

var google = usuarios.find((item) => {
    return item.empresa == 'Google'
}, )

console.log(idades);
console.log(over_eighteen);
console.log(google);