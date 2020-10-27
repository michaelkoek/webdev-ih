import React, { Component} from 'react';
import './App.css';

import Counter from './counter/counter';

class App extends Component {

  state = {
    totalCounter: 0,
    lastClickedName: '',
  }

  updateTotalCounter = (componentName) => {
    this.setState({
      totalCounter: this.state.totalCounter + 1,
      lastClickedName: componentName,
    })
  };

  render() {
    return (
      <section className="App">

        <h1>Total counter: { this.state.totalCounter }</h1>
        <h2>Last clicked: { this.state.lastClickedName }</h2>

        <section className="container">

          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter one" counterColor="rebeccapurple" />
          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter two" />
          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter three" />

          {/* <article className="card">
            <span className="counter">{ this.state.totalCounter }</span>
            <button className="btn" onClick={this.updateCounter}>update counter</button>
          </article>

          <article className="card">
            <span className="counter">{ this.state.totalCounter }</span>
            <button className="btn" onClick={this.updateCounter}>update counter</button>
          </article> */}

        </section>
      </section>
    );
  }
}

export default App;
