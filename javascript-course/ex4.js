function exp(xp) {
    if (xp <= 1) {
        return "Iniciante"
    }

    if (xp <= 3) {
        return "Intermediário"
    }

    if (xp <= 6) {
        return "Avançado"
    }

    return "Jedi Master"
}

console.log(exp(9));
console.log(exp(4));

