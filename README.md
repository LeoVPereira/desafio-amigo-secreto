# 🎉 Amigo Secreto

Bem-vindo ao repositório do Amigo Secreto, um projeto desenvolvido para um desafio da __Alura__! 🚀

## 📜 Descrição

Este projeto consiste em uma aplicação web simples que permite a organização de um sorteio de amigo secreto. Os usuários podem inserir nomes de amigos, visualizar a lista de participantes e, ao final, realizar o sorteio para determinar quem será o "amigo secreto". O sorteio é totalmente aleatório e exibe o resultado na tela.

## 🎯 Funcionalidades

- [x] __Adicionar nomes__: Digite o nome de um amigo e adicione-o à lista.
- [x] __Validar entrada__: Impede a adição de campos vazios.
- [x] __Visualizar lista__: Exibe todos os participantes na tela.
- [x] __Sortear amigo secreto__: Escolhe um nome aleatoriamente e exibe o sorteado.

## 🛠️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (DOM e manipulação de arrays)

## 📂 Estrutura do Projeto

```
📁 desafio-amigo-secreto
├── 📄 index.html  # Estrutura da página
├── 📄 style.css   # Estilização do layout
└── 📄 app.js      # Lógica do sorteio
```

## 🚀 Como Utilizar

Clone este repositório:

`git clone https://github.com/LeoVPereira/desafio-amigo-secreto`

Abra o arquivo `index.html` no navegador.

Digite os nomes e clique em "Adicionar".

Após inserir todos os participantes, clique em "Sortear amigo".

Veja o resultado na tela! 🎊

## ✨ Implementação

🔹 Adicionar Participantes

A função `adicionarAmigo()` captura o nome digitado e o adiciona a um array `listaDeNomes`. Caso o campo esteja vazio, um alerta impede a inserção de valores inválidos.

🔹 Exibição Dinâmica

A lista de participantes é atualizada dinamicamente com a função `criarElementoLi(id, texto)`, que insere um novo `<li>` no elemento `<ul>` correspondente.

🔹 Sorteio Aleatório

A função `sortearAmigo()` gera um índice aleatório com `Math.random()` e seleciona um nome da lista de participantes.


## 📌 Contribuição

Sinta-se à vontade para sugerir melhorias ou novas funcionalidades! Basta abrir uma __issue__ ou enviar um __pull request__.

## 🏆 Desafio Concluído!

Este projeto foi um ótimo exercício para praticar manipulação do DOM, eventos e lógica de sorteio aleatório. 🚀

📢 __Gostou do projeto? Não se esqueça de deixar uma ⭐ no repositório!__

📍 Parte lógica criada por [Leonardo Verbeno Pereira](https://github.com/LeoVPereira) como parte da formação Iniciante em Programação da __Alura__.

