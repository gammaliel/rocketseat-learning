function addToList(item) {
    var list = document.getElementById('repos');
    var litem = document.createElement('li');
    litem.textContent = item;
    list.appendChild(litem);
}
var getRepos = function (username) {
    axios.get("https://api.github.com/users/"+username+"/repos")
    .then(function (response) {
        clear()
        for (const item of response['data']) {
            addToList(item['name'])
        }
    })
    .catch(function (response) {
        console.log(response)
        clear()
        var errorMessage = document.createElement('li')
        errorMessage.textContent = "Oh damn, this guys does *not* exist."
        document.getElementById('repos').appendChild(errorMessage);
    })
}

function getUsername() {
    var field = document.getElementById('nome')
    clear()
    getRepos(field.value)
    addToList('Loading...')
}

function clear() {
    var list = document.getElementById('repos')
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}