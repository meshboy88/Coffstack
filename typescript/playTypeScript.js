// posso definir o tipo do parâmetro e o tipo do retorno da minha função
function runTS(name) {
    return "TypeScript: Hello " + name;
}
console.log(runTS("Lucas"));

//tipagem dinâmica
let message = "Fala bb"
message = 6
message= "Nope"
console.log(message.toUpperCase())

function flipCoin() {
    return Math.random() < 0.5 ? "cara" : "coroa";
}

const result = flipCoin()

if (result === "caara") {
    console.log("Você ganhou!")
} else {
    console.log("Você perdeu!")
}

// Aqui o código vai rodar mas sempre vai dar perdeu