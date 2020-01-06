function address(info) {
    return `O usuário mora em ${info.cidade} / ${info.uf}, no bairro ${info.bairro}, na rua \"${info.rua}\" com nº ${info.numero}.`
}

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(address(endereco));
