var frase;

carregaFrase = function (callback) {
    setTimeout(function () {
        frase = "Minha frase obstrutiva";
        callback();
    }, 3000)
}

imprimeFrase = function () {
    console.log(frase);
}

carregaFrase(imprimeFrase);

console.log("Olá")
