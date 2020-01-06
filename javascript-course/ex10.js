var verfica = function (idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve(true);
        }
        reject(false);
    });
}

verfica(19)
.then(function (response) {
    console.log('then');
    console.log(response);  
})
.catch(function (response) {
    console.log('catch');
    console.log(response)
})