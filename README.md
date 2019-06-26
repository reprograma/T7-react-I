# React I - Conteúdo de aula

> Conteúdo de aula ministrado entre os dias 10/06/2019 a 14/06/2019, sobre fundamentos de React.


-----------------


## Issues - como utilizar nesse repositório

As issues neste repositório podem ser usadas como formas de enviar perguntas e sugestões acerca do assunto da semana de React I. Para fazer a sua pergunta, basta escrever um resumo dela na área do título e uma descrição sobre problema ou dúvida.

Na descrição, é recomendável ser o mais específica possível. Se possível, colocar **partes do seu código** ou **link para o seu repositório** para referência. Especificar também o navegador utilizado e o tamanho de tela. Para documentação de formatação de textos do Github, acesse esse [link](https://guides.github.com/features/mastering-markdown/).


---------------

## Exercícios - Como usar

Baixe todo este repositório. Caso queira inicializar um dos exercícios, navegue com o `cdm` ou `Git Bash` para a pasta do exercício escolhido. Dentro dela, rode os comandos:
```javascript
npm install // instalar dependências
npm start // iniciar aplicativo
```

-------------

## Importante - Documentação oficial
A documentação do React é a sua maior aliada no processo de aprendizagem de React. Ela é detalhada e atualizada. Recentemente, houve uma movimentação para a tradução da documentação para vários idiomas, incluindo o Português do Brasil.

[Documentação Oficial React - Português BR](https://pt-br.reactjs.org/)

--------------

## Conceitos - O que é React?

Segundo sua documentação oficial, o React é:
> Uma biblioteca JavaScript para criar interfaces de usuário

Foi criado por desenvolvedores de software do Facebook e é mantido por uma comunidade ativa. É performático e otimizado para criação de *Single Page Applications* (SPA), ou aplicações de uma página só (tradução livre do inglês). Além disso, é considerada de fácil aprendizagem (baixa curva de aprendizado).

#### Biblioteca vs. Framework
Há diversas discussões sobre as diferenças entre esses dois conceitos. No nosso caso, vamos levar em consideração as seguintes definições:

- **Framework**: Conjunto de bibliotecas; toda arquitetura é desenvolvida ao redor do framework.
- **Library**: a arquitetura não é modificada, só chama métodos e elementos conforme a necessidade.

Em linhas gerais, há a necessidade de pensar toda a estrutura do software antes de implementar um framework. A biblioteca, por outro lado, não é tão invasiva, podendo se adequar à estrutura existente do software.

-----------------

## Setup - O que preciso para começar minha aplicação em React?

Para o setup manual, vamos precisar de:
- Biblioteca React ([CDN](https://reactjs.org/docs/cdn-links.html));
- Compilador ([Babel](https://babeljs.io/));
- "Simulador" de servidor ([Live-server](https://www.npmjs.com/package/live-server)).

*Biblioteca React*: precisamos importar para o nosso projeto para desfrutar de todas as funcionalidades dela.

*Compilador*: por estarmos usando sintaxes e métodos novos, precisamos transformar (ou traduzir) esse código para um que nosso navegador entenda. O compilador faz essa transformação. Para criação do nosso projeto em React, vamos usar o Babel, porém existem outros compiladores, para linguagens diferentes.

*Servidor*: em algumas situações, o conteúdo será carregado a partir do Javascript e com isso o protocolo `file://` usado para sites estáticos não funciona. Por isso, devemos simular um servidor local, para mudar o protocolo.

### Create React App
O setup pode ser demorado e parecer uma perda de tempo. Por isso, foi criado um "atalho". Trata-se do [Create React App](https://facebook.github.io/create-react-app/), um comando que instala todas as dependências necessárias para rodar um aplicativo em React.

Para instalar, você deve ter o **Node** instalado na sua máquina. Em seguida, dentro da pasta que quer iniciar um projeto, rode o comando:

```javascript
npx create-react-app nome-da-pasta
cd nome-da-pasta
npm start
```

Será criada uma pasta chamada `noma-da-pasta` dentro do diretório em que você está rodando o comando e lá estará todos os arquivos criados pelo Create React App.

Toda a documentação e detalhes do que acontece por debaixo dos panos, você pode conferir [neste link](https://facebook.github.io/create-react-app/docs/getting-started).

--------------

## JSX
Em React, conseguimos usar uma sintaxe de Javascript que se chama JSX, ou "Javascript XML" (nome não oficial). É como se colocássemos elementos HTML no Javascript. O uso do JSX não é obrigatório para programarmos em React, porém facilita nosso trabalho.


Um exemplo é:
```javascript
const template = <h1>React na Reprograma</h1>
```
Estamos declarando que `template` é uma constante, que é um objeto em React. Observando a compilação, podemos ver que um método da biblioteca React é chamado:
```javascript
// const template = <h1>React na Reprograma</h1>
var template = React.createElement("h1", null, "React na Reprograma");
```
E esse método, `React.createElement()` retorna um *objeto* em React. Vale lembrar que...

> **Tudo** é um objeto em Javascript

Para quem quiser saber mais sobre JSX, vejam [este link](https://medium.com/reactbrasil/jsx-de6f43b06f41).
