import { Company, Post, PostComment, User } from "./interfaces";

export const lucas: User = {
    name: "Lucas",
    userName: "lucasbu88",
    email: "lucas@gmail.com"
};

export const vitor: User = {
    name: "Vitor",
    userName: "vitor_silva",
    email: "vitor@gmail.com"
};


export const post: Post = {
    title: "Título do post",
    imageUrl: "https://picsum.photos/200/200",
    user: lucas,
};


export const comment: PostComment = {
    content: "Conteúdo do comentário",
    likes: 5,
    user: vitor,
};


export const google: Company = {
    name: "Google",
    cnpj: "123456789",
    website: "https://google.com"
}