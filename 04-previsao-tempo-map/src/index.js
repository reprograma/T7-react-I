import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Previsao from './componentes/Previsao';
import * as serviceWorker from './serviceWorker';

const datas = [
  {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
      max: 31,
      min: 20
    }
  },
  {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
      max: 25,
      min: 18
    }
  },
  {
    data: '14/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
      max: 29,
      min: 10
    }
   },
   {
    data: '31/07/2019',
    resumo: 'Nevando',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
      max: 10,
      min: 0
    }
   }
]

class Container extends React.Component {
  render() {
    return (
      <div className = "previsao-container">
        {this.props.praia.map( (item) => {
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
    )
  }
}

ReactDOM.render(<Container praia={datas} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
