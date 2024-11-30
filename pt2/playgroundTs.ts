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

//CONSTRAINT em Generics

// constrain
// value user: User
// Aqui eu to passando um tipo genérico pra função, mas to falando que ele tem obrigatoriamente que ter um user do tipo User

interface WithUser {
    user: User;
}

function getAuthorName<Type extends WithUser>(value: Type): string {
    return value.user.name;
}

const name = getAuthorName(post);


//KEYOF TYPE OPERATOR
/*As propriedades de uma variável são também chamadas de chaves
no caso do lucas2, seria o name, userName e email
Ao passar no segundo argumento da função a chave como keyof User, por exemplo, eu estou dizendo que
eu quero o valor de alguma propriedade daquele tipo, e ai quando eu chamo a função, ao chamar aquela chave, ja vai me retornar o valor da chave
Como estou usando generics, significa que eu posso chamar a função get property com o objeto comment
e como no outro arquivo o objeto comment ja ta tipado como PostComment, eu posso chamar no segundo argumento da função
qualquer chave desse objeto e ele vai me retornar o valor correspondente.  

export const comment: PostComment = {
    content: "Conteúdo do comentário",
    likes: 5,
    user: vitor,
};

export interface PostComment {
    content: string;
    likes: number;
    user: User;
}

*/


export const lucas2: User = {
    name: "Lucas",
    userName: "lucasgar6",
    email: "lucas@coffstack.com",
};

function getProperty<Type>(value: Type, key: keyof Type) {
    return value[key];
}

const valueX = getProperty(comment, "content");
console.log(value);

//Ou seja, no console vai aparecer "conteúdo do comentário", 
//que é o valor da chave content no objeto comment
//Como to passando o tipo generic, sei que a chave tem o mesmo tipo do valor, que no caso seria PostComment
//O tipo do valor retornado é inferido automaticamente com base na chave. 
//No caso de "content", o valor será do tipo string (porque content é string em PostComment). 
// Se a chave fosse "likes", o valor seria do tipo number.


// Resumo do que acontece:
// - Você passa o objeto `comment`
// - Especifica a chave "content"
// - A função retorna o valor correspondente: "Conteúdo do comentário"