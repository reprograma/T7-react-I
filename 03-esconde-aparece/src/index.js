import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class EscondeAparece extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibilidade: true
    }
  }

  mudarVisibilidade = () => {
    this.setState((estadoAnterior) => (
      { visibilidade: !estadoAnterior.visibilidade }
      )
    )

  }

  render() {
    return (
      <div>
        <h1>Esconde-Aparece</h1>
        <button onClick={this.mudarVisibilidade}>

          {this.state.visibilidade ?
                 'Esconder Detalhes' : 'Mostrar Detalhes'}

        </button>
        {this.state.visibilidade &&
          <p>Voces sao maravilhosas</p>}
      </div>
    )
  }
}

ReactDOM.render(<EscondeAparece />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
