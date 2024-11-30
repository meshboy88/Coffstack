// posso definir o tipo do parâmetro e o tipo do retorno da minha função
// Para compilar o código de ts para js, posso entrar na pasta com cd pasta e então rodar npx tsc "nome_do_arquivo"

function runTS(name: string): string {
    return "TypeScript: Hello " + name;
}

console.log(runTS("Lucas"));

//tipagem dinâmica(js) vs tipagem estática(ts)
//basicamente significa que eu posso mudar o tipo no js (ex: string => number), coisa que no ts não posso

//Inferência de tipo

function flipCoin() {
    return Math.random() < 0.5 ? "cara" : "coroa";
}

const result = flipCoin()

if (result === "cara") { //antes tava "caara"
    console.log("Você ganhou!")
} else {
    console.log("Você perdeu!")
}

//Aqui o código nem vai rodar por conta da inferência de tipo do ts
//Ele percebe que a comparação não tem overlap (sobreposição), porque caara não é um retorno possível