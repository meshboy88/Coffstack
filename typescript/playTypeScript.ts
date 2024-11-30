// posso definir o tipo do parâmetro e o tipo do retorno da minha função
// Para compilar o código de ts para js, posso entrar na pasta com cd pasta e então rodar npx tsc "nome_do_arquivo"

function runTS(name: string): string {
    return "Hello " + name;
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


//interfaces e 
//sistema de tipagem estrutural (O ts via olhar a estrutura dos parâmetros necessários)
//Ou seja, mesmo que o objeto tenha uma propriedade extra, se ela não for usada diretamente, ele ainda deixa o código rodar:

const person = {firstName: "Lucas", lastName: "Leo", age: 24}

function getFullName(user: {firstName: string, lastName: string}) {
    return `${user.firstName} ${user.lastName}`
}

console.log(getFullName(person))

//declarar com type ou interface é quase a mesma coisa, a diferença é que com o type precisa colocar um "=" e que se eu redeclarar a mesma interface
//mais de uma vez, ela faz tipo um merge, então conta como se fosse a mesma(Não que seja algo indicado de se fazer)

interface User{
    firstName: string, 
    lastName: string, 
    age: string,
}

type User2 = {
    username: string,
    email: string,
    id: number,
}

// Estendendo interfaces e types

// Ao tipar o parâmetro `programmer` com a interface `Programmer`, é obrigatório que o objeto fornecido 
// tenha todas as propriedades definidas na interface `Programmer`.
// Como a interface `Programmer` estende a interface `User3`, todas as propriedades de `User3` também
// são propagadas e passam a ser obrigatórias no objeto `programmer`.
// Em resumo, o objeto precisa incluir todas as propriedades de `Programmer` e de `User3`.


interface User3 {
    firstName: string,
    lastName: string,
}

interface Programmer extends User3 {
    favoriteLanguage: string,
    role: string
}

function getBio(programmer: Programmer) {
    return (
    `My name is ${programmer.firstName} ${programmer.lastName}. My favorite Language is ${programmer.favoriteLanguage} and I work as a ${programmer.role} developer.`
);
}

const programmer = {
    favoriteLanguage: 'Typescript',
    role: "Front-end",
    firstName: "Lucas",
    lastName: "Leo"
}

console.log(getBio(programmer))

// Para estender com type em vez de interface se usa o E comercial e aquilo que se quer estender vem depois da chave
// Se o valor puder ser undefined, posso usar um union type com | para definir que pode ser undefined, entretanto, dessa forma
// no objeto eu ainda teria que especificar o campo como undefined. Coisa que eu não teria que fazer se usasse uma "?"
// Ao usar uma "?", ele automaticamente marca como undefined se o valor não for passado
// ex:

interface User4 {
    firstName: string,
    lastName: string,
    carro?: string,
    emprego: string | undefined
}

type Batata = {
    plantio: string
} & User4;

function getVida(choices: Batata) {
    return `Oi, meu nome é ${choices.firstName} ${choices.lastName}. Tenho uma fazenda de ${choices.plantio} ${choices.emprego} ${choices.carro} e nada mais.`
}

const choices = {
    firstName: "Pietro",
    lastName: "Patati",
    emprego: undefined,
    plantio: "Cenouras"
}

console.log(getVida(choices))