//ROADMAP
/*
Funcionalidades:
Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
*/

let listaDeNomes = [];

function adicionarAmigo() {
    try{
        let nome = document.querySelector(".input-name").value;
        if (nome.trim() === ""){
            // Evita adicionar nomes vazios
            throw new Error("Erro: Campo vazio. Digite um nome antes de adicionar");
        } 
        listaDeNomes.push(nome);
        criarElementoLi("listaAmigos", nome);       
    }catch(error){
        alert(error.message);
    }finally{
        document.querySelector(".input-name").value = "";//Limpa o campo do input
    }
}

function criarElementoLi(id, texto){
    let elementoUl = document.getElementById(id);
    let novoLi = document.createElement("li");
    novoLi.textContent = texto;
    elementoUl.appendChild(novoLi);

}

function sortearAmigo(){
    quantidadeNomes = listaDeNomes.length; //definindo o número de nomes adicionados
    random = parseInt(Math.random() * quantidadeNomes);// definindo um número aleatório que será usado como index para o array de nomes
    nomeSorteado = listaDeNomes[random];
    criarElementoLi("resultado", nomeSorteado);
}