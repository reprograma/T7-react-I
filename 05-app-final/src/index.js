import React from 'react';
import ReactDOM from 'react-dom';
import Previsao from './componentes/previsao/Previsao';
import TamanhoFonte from './componentes/TamanhoFonte';
import Comentario from './componentes/comentario/Comentario';
import previsoes from './dados/previsoes';
import comentarios from './dados/comentarios';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comentariosVisibilidade: false
    }
  }

  toggleComentarios = () => {
    this.setState((estadoAnterior) => {
      return {
        comentariosVisibilidade: !estadoAnterior.comentariosVisibilidade
      }
    })
  }

  render() {
    return (
      <div>
        <div className="previsao-container">
          {previsoes.map( (item) => {
            return (
              <Previsao
                data={item.data}
                resumo={item.resumo}
                imagem={item.imagem}
                temperatura={item.temperatura}
              />
            )
          })}
        </div>
        <TamanhoFonte />
        <button onClick={this.toggleComentarios} className="btnComentario">
          {this.state.comentariosVisibilidade ? 'Esconder comentários' : 'Mostrar comentários' }
        </button>
        {this.state.comentariosVisibilidade && comentarios.map((item) => {
          return (
            <Comentario 
            imagem={item.autora.imagem}
            nome={item.autora.nome}
            subtitulo={item.subtitulo}
            comentario={item.texto}
            />
            )
          })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
