import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

class Comentario extends React.Component {
  render() {
    return (
      <div className="comentario">
        <img className="comentario__perfil" src={this.props.imagem} />
        <div>
          <h2 className="comentario__nome">{this.props.nome}</h2>
          <h3 className="comentario__subtitulo">{this.props.subtitulo}</h3>
          <hr />
          <p>{this.props.comentario}</p>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
    <div>
      <Comentario
        imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
        nome="beatriz"
        subtitulo="perfeita"
        comentario="lorem ipsum dolor sit amet"
      />
      <Comentario
        imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
        nome="mellina"
        subtitulo="mais ou meos"
        comentario="blabalba"
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
