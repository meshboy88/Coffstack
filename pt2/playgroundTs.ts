import { Post, PostComment, User, Company } from "./interfaces";
import { lucas, vitor, post, comment, google} from "./mocksData"

function identify<T>(value: T): T {
    return value;
}

const value = identify(google)

console.log(value)

//pt 2 => Exemplo de paginação:

interface Page<Data> {
    data: Data[],
    count: number,
    nextPage: number | null,
    previousPage: number | null
}

function getUserList(): Page<User> {
    return {
        count: 5,
        data: [lucas, vitor],
        nextPage: 2,
        previousPage: null
    }
}

const users = getUserList()

console.log(users.data[0])

/* O que são Generics em TypeScript?
Definição básica
Generics permitem que você crie componentes reutilizáveis, parametrizando o tipo que será usado. Isso é útil porque evita redundância de código e aumenta a flexibilidade.

Por exemplo, em vez de criar uma função ou interface separada para cada tipo (como User, Post, etc.), você pode usar Generics para que o tipo seja dinâmico e definido apenas quando o componente for usado.

EX:

interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
 */

/* 1) Por que o T aparece em três lugares na função identity?

function identity<T>(value: T): T {
    return value;
}

O T aparece em três lugares porque ele está sendo declarado, usado e retornado:

Declaração do genérico:
O <T> após o nome da função (identity) declara que esta função tem um tipo genérico chamado T. Esse T pode ser substituído por qualquer tipo (como string, number, etc.) quando a função for chamada.

Uso como tipo do parâmetro:
O value: T indica que o parâmetro value deve ter o tipo definido por T. Quando a função for chamada, o tipo de T será inferido automaticamente com base no valor passado ou definido manualmente.

Uso como tipo de retorno:
O : T indica que a função retorna um valor do mesmo tipo T. Assim, o retorno será do mesmo tipo do parâmetro.

ex:
const result = identity<string>("Hello"); // Aqui, T é 'string'
console.log(result); // "Hello"

const numberResult = identity(42); // Aqui, o TypeScript infere que T é 'number'
console.log(numberResult); // 42

*/