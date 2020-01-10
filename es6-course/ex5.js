const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x);
console.log((y));

function soma(...para) {
    let result = 0;

    for (let i of para) {

        result += i;
    }

    return result;
}

console.log(soma(1, 2, 3, 4, 5, 6))

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};

console.log(usuario2);