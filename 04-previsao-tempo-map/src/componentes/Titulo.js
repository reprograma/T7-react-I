import React from 'react';

const Titulo = (props) => {
  return (
    <div>
      <h2 className="previsao__data">{props.data}</h2>
      <p className="previsao__resumo">{props.resumo}</p>
    </div>
  )
} 

export default Titulo;