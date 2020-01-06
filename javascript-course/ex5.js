function list_skills(obj) {
    for (const item of obj) {
        console.log(`${item.nome} possui as habilidades ${item.habilidades.join(', ')}`);   
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

list_skills(usuarios)