import React, { Component} from 'react';
import './App.css';

// import Counter from './counter/counter';
import Button from './button';

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

  sendMyForm = (event) => {
    event.preventDefault();
  }

  render() {

    const myObject = {
      glasses: true,
      human: true,
      train: {
        type: 'sprinter',
        name: 'NS'
      },
    }

    
    const naamTrein = myObject.train.name;

    const { name, type } = myObject.train;
    // vertraling
    // const name = myObject.train.name;
    // const type = myObject.train.type;


    console.log(name, type);


    return (
      <section className="App">

        {/* <form onSubmit={this.sendMyForm}>
          <input type="text" />
          <button type="submit">Sending</button>
        </form> */}

      <Button mytypebutton="primary" mytitle="click on me" />
      <Button mytypebutton="seconary" mytitle="self destruct button" />
      {/* <Counter onUpdateCounter={this.updateTotalCounter} idname="counter three" /> */}

        {/* <h1>Total counter: { this.state.totalCounter }</h1>
        <h2>Last clicked: { this.state.lastClickedName }</h2>

        <section className="container">

          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter one" counterColor="rebeccapurple" />
          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter two" />
          <Counter onUpdateCounter={this.updateTotalCounter} idname="counter three" /> */}

          {/* <article className="card">
            <span className="counter">{ this.state.totalCounter }</span>
            <button className="btn" onClick={this.updateCounter}>update counter</button>
          </article>

          <article className="card">
            <span className="counter">{ this.state.totalCounter }</span>
            <button className="btn" onClick={this.updateCounter}>update counter</button>
          </article> */}

        {/* </section> */}
      </section>
    );
  }
}

export default App;
