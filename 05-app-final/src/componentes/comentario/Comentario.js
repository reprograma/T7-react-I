import React from 'react';

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

export default Comentario;