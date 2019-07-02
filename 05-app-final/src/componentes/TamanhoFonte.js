import React from 'react';

class TamanhoFonte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamanho: 16
    }
  }

  aumentarFonte = () => {
    this.setState((estadoAnterior) => {
      return {
        tamanho: estadoAnterior.tamanho + 2
      }
    })
  }

  diminuirFonte = () => {
    this.setState((estadoAnterior) => {
      return {
        tamanho: estadoAnterior.tamanho - 2
      }
    })
    console.log('diminui fonte')
  }

  render() {
    document.querySelector('body').style.fontSize = `${this.state.tamanho}px`;
    return (
      <div className="btnGroup">
        <button className="btnComentario btnFontSize" onClick={this.aumentarFonte}>+1</button>
        <button className="btnComentario btnFontSize" onClick={this.diminuirFonte}>-1</button>
      </div>
    )
  }
}

export default TamanhoFonte;