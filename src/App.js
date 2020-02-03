import React from 'react';
import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import ConditionalSection from './sections/conditional'



class App extends Component {
  render(){
    return <div className='App'>
      <ConditionalSection/>
    </div>
  }
}





//-----------------------------------------------------------------------------------
class App3 extends Component {
  render(){
    return (
      <div className='App'>
        <p>Primer componente con state</p>
        <Contador3 />
      </div>
    )
  }
}

class Contador3 extends Component {

  constructor(props){
    super(props);
    // this.state = {contador: 1};
    // this.state = {contador: new Date().toLocaleTimeString()};
    this.state = {contador: this.props.contadorInicial};


    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
        }, 1000);
  }

  render(){
    return (
      // <span>El contador está a {this.state.contador}</span>
      <ContadorNumero3 numero={this.state.contador}/>
    )
  }
}


Contador3.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero3 extends Component {
  render(){
    console.log('copntador numero render')
    return <span>{this.props.numero}</span>
  }
}

//---------------------------------------------------------------------

class App2 extends Component {

  render () {
    return(
      <div className = "App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello2 title="Hello I'm a React page"/>
          <Text2 
          number={2} 
          text='texto en string' 
          boolean={false}
          arrayOfNumbers={
            [2,3,10]
          }
          objectWithInfo={{key: 'value1', key2: 'value2'}}
          multiply={(number) => number*2}
          title={<h1>Este es el título</h1>}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
        </body>
      </div>
    );
  }
}

class Hello2 extends Component {
  render () {
    return (
      <h3>{this.props.title}</h3>
    )
  }
  
}

class Text2 extends Component {
  render () {
    const {
      text, 
      number, 
      boolean, 
      arrayOfNumbers, 
      objectWithInfo,
      title
    } = this.props;

    const mappedNumbers = this.props.arrayOfNumbers.map(this.props.multiply);

    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{JSON.stringify(boolean)}</p>
        <p>{arrayOfNumbers}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>/
      </div>
    )
  }
}





export default App;
