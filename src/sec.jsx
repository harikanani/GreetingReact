import React from 'react'

class Sec extends React.Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "Some Items";
        var myArr = this.state.data.slice();
        myArr.push(item);
        this.setState({data: myArr});
    };
    render() {
        return (
            <>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
            </>, 
            document.getElementById('sec')
        );
    }
}

export default Sec;