import React, { Component } from "react";
import styled from 'styled-components'

const Title = styled.h1`
color: #FF0000;
margin:10%;
`;

const Body = styled.div`
display:flex;
justify-content:center;
padding:17%;
background-color: #00FFFF ;
`;

class App extends Component {
  
  state = {
    numero:0,
  };

  add = () => {
    if (this.state.numero < 10 ) {
      
      this.setState({
      numero: this.state.numero + 1
    })
  }
  }
    

  remove = () => {
     if (this.state.numero > 0 ) {
        
      this.setState({
      numero: this.state.numero - 1
    })
  }
  };

  render() {
    return (
      <Body>
        <button onClick={this.add}>+</button>
        <Title>{this.state.numero}</Title>
        <button onClick={this.remove}>-</button>
      </Body>
    );
  }
}

export default App;
