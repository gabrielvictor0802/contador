import React, { Component } from "react";

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
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.numero}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}

export default App;
