// posso definir o tipo do parâmetro e o tipo do retorno da minha função
// Para compilar o código de ts para js, posso entrar na pasta com cd pasta e então rodar npx tsc "nome_do_arquivo"

function runTS(name: string): string {
    return "TypeScript: Hello " + name;
}

console.log(runTS("Lucas"));