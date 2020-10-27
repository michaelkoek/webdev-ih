import React, { Component } from 'react';


// smart component
class Button extends Component {
    state = {
        name: 'michael koek',
        address: 'rozendtraat',
        land: 'nederland'
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    onHandlerClicker = () => {
        console.log('onHandlerClicker')
    }

    render() {

        const { mytypebutton, mytitle } = this.props;
        
        console.log( mytypebutton, mytitle)


        return (

            <button onClick={this.onHandlerClicker} className={mytypebutton === 'primary' ? 'myprimstyle btn' : 'mysecstyle btn'}>
                {mytitle}
            </button>
        );
    }
};

export default Button;

// dumb component/presentation component
// const Button = ({}) => {
//     // const [myname, setMyname] = useState('michael koek');
//     // const [myaddress, setmyaddress] = useState('rozensrdt');

//     // useEffect(() => {

//     // }, [myname]);

//     return (
//         <div>
//             {name} { type }
//         </div>
//     )
// }
