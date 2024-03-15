const notaDoAluno1 = 5;
const notaDoAluno2 = 8;
const notaDoAluno3 = 10;

const nomeDoAluno1 = "João";
const nomeDoAluno2 = "Claudio";
const nomeDoAluno3 = "Kian";

const media = (notaDoAluno1+ notaDoAluno2+ notaDoAluno3)/3

console.log( `a media dos alunos é ${media}`);

console.log(typeof nomeDoAluno1 );

if(media> 5){
    console.log(`parabens a nota da turma foi de ${media}`)
}

else{
    console.log(`triste a nota da turma foi de ${media}`)
}
