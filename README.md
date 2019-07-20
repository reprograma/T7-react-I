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
```JSX
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


### JSX - Funcionalidades

Sendo uma sintaxe de Javascript, ele também pode ser utilizado com sua lógica. Por exemplo, é possível renderizar variáveis dentro do template HTML. Coloca-se a variável entre `{ }` dentro do template.

```JSX
const name = "Jessica"

const template = <div>
                    <h1>React App -- Introdução</h1>
                    <p>Olá, {name}</p>
                    <img src="imagem.jpg" alt="Descrição da imagem" />
                  </div>
```

> Atenção: o retorno do JSX deve conter **1 filho** só. Isso quer dizer que, se houver mais elementos HTML a serem renderizados, você deve englobá-los dentro de um elemento, como em uma div.

Também há a possibilidade de renderizar o **retorno de uma função**.

```JSX
const name = {
  primeiroNome: "Jessica",
  sobreNome: "Silva"
}

function formatarNome(nome) {
  return nome.primeiroNome + ' ' + nome.sobreNome;
}

const template = <div>
                    <h1>React App -- Introdução</h1>
                    <p>Olá, {formatarNome(name)}</p>
                  </div>
```

Da mesma forma, chamamos a função entre `{ }`, podendo passar parâmetros dentro dela.

Dentro da função pode haver estruturas lógicas, contanto que se retorne algo, que pode também ser um objeto em React.

```JSX
const name = {
  primeiroNome: "Jessica",
  sobreNome: "Silva"
}

function formatarNome(nome) {
  return nome.primeiroNome + ' ' + nome.sobreNome;
}

function saudacao(usuaria) {
 if (usuaria) {
   return <p> Como está, {formatarNome(usuaria)}?</p>
 } else {
   return <p> Como está, desconhecida?</p>
}

const template = <div>
                    <h1>React App -- Introdução</h1>
                    {saudacao(name)}
                 </div>
```

### ReactDOM.render()

Só declarando a variável não conseguimos fazer com que o elemento apareça na página. Pra isso, devemos usar um método da biblioteca React DOM, que é o `render()`. 

O [ReactDOM.render()](https://pt-br.reactjs.org/docs/react-dom.html#render) é um método que renderiza os elementos indicados dentro de um container.

Para renderizar o `template` acima criado no nosso navegador, devemos chamar o `render()`

```JSX
ReactDOM.render(template, document.getElementById('root'));
```

Perceba: o `render()` é um método que recebe **dois** parâmetros: **o que** (elemento ou componente) e **onde** (container ou elemento div, normalmente no index.html na pasta public/) será renderizado. 


--------------

## Elementos
Até agora, estamos criando elementos em React. **Elementos** são *imutáveis*, ou seja, uma vez renderizados, não conseguimos modificar seus atributos e conteúdo.

[Referência na Documentação - Rendering elements](https://pt-br.reactjs.org/docs/rendering-elements.html)

Para modificar nossas páginas e conteúdos, utilizamos outras ferramentas do React.

---------------

## Componentes e Props

**Componentes** são a parte mais importante do React. React é uma biblioteca de interface e ele lida como se cada pedaço dessa interface fosse um componente. Elas são partes *reutilizáveis* de um todo. Podemos ver uma página sendo dividida em componentes na imagem abaixo:

![Exemplo de componetização em React. Layout é divido em várias partes, de acordo com seus componetes: App, CommentForm, CommentList e, dentro dele, Comment](https://i2.wp.com/www.qcode.in/wp-content/uploads/2018/07/react-component-tree.png?resize=1024%2C578&ssl=1)
_Fonte: [Qcode](https://www.qcode.in/learn-react-by-creating-a-comment-app/)_


O layout é igual para todas as pessoas, mas as informações, conteúdos ou *propriedades* de cada componente é diferente. O meu nome e meus comentários são customizadas para a minha experiência, ao mesmo tempo que o cabeçalho e outros elementos são iguais para todos os usuários.

**Qual a diferença então entre Componente e Elemento?**

Componentes são customizáveis, são compostos por elementos e são reutilizáveis.

Para criar um Componente, criamos uma função com um parâmetro único, que retorna um elemento React. É isso que define um Componente em React.

```JSX
function BemVinda(props) {
 return <h1>Hello, {props.nome}</h1>;
}
```

> ATENÇÃO: o nome do componente tem que ter **sempre** sua primeira letra maiúscula (por exemplo, **B**emVinda, não bemvinda)

Essa é a estrutura básica de um componente. De novo, componente em React é definido por:
- Uma **função** (ou classe);
- Recebe um **único parâmetro** (`props`);
- Retorna um **elemento JSX**.

Para chamar um componente, fazemos como se ele fosse uma "tag" HTML. No exemplo acima, o componente a ser chamado seria:
```JSX
<BemVinda />
```

[Referência Documentação - Componentes e Props](https://pt-br.reactjs.org/docs/components-and-props.html)


### Props
`props` é um parâmetro que é um **objeto**, que podemos inserir _propriedades_ e _valores_ que quisermos.

```JSX
function BemVinda(props) {
 return <h1>Hello, {props.nome}</h1>;
}

ReactDOM.render(<BemVinda
                  nome="Mellina"
                  profissao="Desenvolvedora Front-End"
                  apelido="mell"
                  comida="lasanha"
                />, 
                appRoot
              )
```

Para passar `props` para um componente, inserimos a sua _propriedade_ e _valor_ como se fossem "atributos" em HTML. No exemplo acima, é como se estivéssemos passando como `props` para o componente BemVinda:
```javascript
const props = {
  nome: "Mellina",
  profissao: "Desenvolvedora Front-End",
  apelido: "mell",
  comida: "lasanha"
}
```
Essa `props` não é explicitamente mostrada para nós, mas enviada para o componente nos bastidores.

Para acessar as _propriedades_ do nosso parâmetro e objeto `props`, usamos a sintaxe para acessar propriedades de um objeto que é `objeto.propriedade`. Se quisermos acessar a propriedade `profissao` da props, escreveríamos `props.profissao`.

```JSX
function BemVinda(props) {
 return <h1>Olá, {props.nome}, {props.profissao}</h1>;
}

ReactDOM.render(<BemVinda
                  nome="Mellina"
                  profissao="Desenvolvedora Front-End"
                  apelido="mell"
                  comida="lasanha"
                />, 
                appRoot
              )
```

> **ATENÇÃO**: componentes em React **NÃO** são elementos HTML. Sua sintaxe foi desenvolvida para parecer com a linguagem HTML, porém não devem ser confundidos.

### Componente Classe
Há uma outra forma de declarar um componente, que é por meio de extensão da classe `React.Component`:
```JSX
class BemVinda extends React.Component {
  render() {
    return (
      return <h1>Olá, {props.nome}, {props.profissao}</h1>;
    )
  }
}
```
Quando declaramos dessa forma, temos acesso a vários **métodos** da biblioteca React, sendo que somente o [`render()`](https://pt-br.reactjs.org/docs/react-component.html#render) é obrigatório a ser usado.


Isso significa que estamos criando um objeto classe que é filho de React.Component.

-----------------

**Quando usar um componente Funcional e quando usar um componente Classe?**

Os componentes **funcionais** também são chamados de **_Stateless Components_**, ou _componentes sem estado_.

Os componentes de **classe** também são chamados de **_Stateful Components_**, ou _componentes com estados_.

Entraremos no tópico de **states ou estados** em breve, mas já adiantando que, apesar de não haver regras para criar um componente funcional ou de classe, há uma condição que definir um componente classe é **obrigatório**: se esse componente tem estado ou *state*.

-----------

## Estados e eventos
Estados ou states são como props, porém são **atualizáveis e controladas pelo componente e privadas**. _States_ são objetos.

[Referência Documentação - State e Lifecyle](https://pt-br.reactjs.org/docs/state-and-lifecycle.html)

Como antes citado, _states_ só existem dentro de componentes de classe. Para criar _states_, devemos defini-las dentro do _constructor()_ da nossa Classe.

```JSX
class EscondeAparece extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibilidade: true
    }
  }
  render() {
    return (
      <div>
        <h1>Esconde-Aparece</h1>
        {this.state.visibilidade ? <p>Voces sao maravilhosas</p> : ''}
      </div>
    )
  }
```

O _constructor()_ é um método nativo da classe que é chamado antes de criar o componente. Um estado não é passado de mãe pra filha, como acontece com _props_ - ele é definido, criado e manipulado dentro do próprio componente. Por esse motivo, dizemos que um estado é _privado_.

> Saber o que é uma Classe em Javascript é importante para entender a estrutura do React. Para saber mais, leia na [documentação do MDN sobre Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes).


### Eventos e o setState()

Para modificar um estado, é preciso chamar um método especial, o `setState()`. Ele recebe um parâmetro que é uma função, que deve retornar o novo valor do estado, ou seja um _objeto_.

Essa função pode receber um parâmetro, que é o **estado no momento que a mudança é aplicada**, ou o **estado anterior**.

```javascript
setState((estadoAnterior) => {
  return { estadoUm: estadoAnterior.estadoUm + 1 } )
}
```

[Referência Documentação - setState()](https://pt-br.reactjs.org/docs/react-component.html#setstate)

O `setState()` pode ser chamado dentro de um outr método, definido dentro do nosso componente Classe. No nosso exemplo, podemos criar um método para modificar o estado de visibilidade do componente `EscondeAparece`. 

```JSX
mudarVisibilidade = () => {
  this.setState((estadoAnterior) => (
    { visibilidade: !estadoAnterior.visibilidade }
    )
  )
}
```

Toda vez que o `mudarVisibilidade()` for chamado, ele mudará o estado do componente.

O que resta é conectar essa ação (método) com um gatilho (evento).

[Referência Documentação - Eventos](https://pt-br.reactjs.org/docs/handling-events.html)

A maneira como o React lida com eventos é bem parecido com os _eventos inline_. No componente que queremos inserir um escutador de evento (_event listener_), inserimos o evento e a função que é acionada, como se fossem "atributos" deste componente.

```JSX
<button onClick={this.mudarVisibilidade}> // lembre: usamos o this porque estamos dentro de uma classe
```

Esse código é suficiente para fazer com que o `button` acione a função `mudarVisibilidade()` toda vez que for _clicado_.

Caso tenha curiosidade, é possível ver todos os [eventos suportados no React](https://pt-br.reactjs.org/docs/events.html#supported-events) e suas sintaxes.

-----------

## Ciclos de vida (lifecyle)
[Referência Documentação - Lifecycle](https://pt-br.reactjs.org/docs/react-component.html#component-life-cycle)

Por padrão, o React deixa disponível alguns métodos que são acionados em momentos específicos da aplicação. Eles são separados em: montando (criação), atualizando (mudança) e desmontando (destruição).

**Montando**
- constructor(): aciona na hora de criar o componente. Propriedades e estados são estabelecidos neste momento.
- render(): renderiza o componente no DOM.
- componentDidMount(): aciona depois que o `render()` acontece.

**Atualizando**
- componentDidUpdate(): é inovocado depois que há uma atualização de estado ou qualquer outro tipo de atualização do componente.

**Desmontando**
- componentWillUnmount(): aciona depois que o componente é destruido ou desmontado.

![Diagrama de métodos de ciclo de vida, quando ocorrem e em que ordem. Diagrama completo pode ser visto no link a seguir.](https://blog.larapulse.com/files/original/images/09/19/0919a813a4bc70d8ef6a7928ba24bca7f3247496.png)

O diagrama interativo pode ser visto [neste link](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).


-----------

## Condicionais

-----------

## Listas e Chaves


-----------


### Referência avançada
- [Padrões em React: Criando Componentes - Medium](https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-criando-componentes-d35422034d75)
- [[EN] Stateful and Stateless Components in React](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/)