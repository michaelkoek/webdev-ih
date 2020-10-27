import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        });

        this.props.onUpdateCounter(this.props.idname);
        console.log(this.props);
    
        // this.setState(prevState => ({
        //   totalCounter: prevState.totalCounter + 1
        // }));
      }

    render() {
        return(
            <article className="card" style={{
                backgroundColor: this.props.counterColor
            }}>
                <span className="counter">{ this.state.counter }</span>
                <button className="btn" onClick={this.updateCounter}>update counter</button>
            </article>
        );
    }

}

export default Counter;


/**
 * Function component variant
 */
// const Counter = ({ updateCounter }) => {
//     return(
//         <article className="card">
//             <span className="counter">{ this.state.counter }</span>
//             <button className="btn" onClick={updateCounter}>update counter</button>
//         </article>
//     );
// }

// export default Counter;