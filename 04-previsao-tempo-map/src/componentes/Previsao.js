import React from 'react';
import Titulo from './Titulo';
import Imagem from './Imagem';
import Tabela from './Tabela';

class Previsao extends React.Component {
  render() {
    return (
      <div className="previsao">
        <Titulo
          data={this.props.data}
          resumo={this.props.resumo}
        />
        <Imagem
          imagem={this.props.imagem}
        />
        <Tabela
          temperatura={this.props.temperatura}
        />
      </div>
    )
  }
}

export default Previsao;