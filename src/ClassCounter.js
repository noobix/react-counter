import React from "react";

class ClassCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number: 0
        };
    }
    HandleIncrease = () =>{
        this.setState({number: this.state.number +1})
    }
    HandleDecrease = () =>{
        this.setState({number: this.state.number -1})
    }
    render(){
        return(
            <>
            <h1>{this.state.number}</h1>
            <button onClick={this.HandleIncrease}>Increase count</button>
            <button onClick={this.HandleDecrease}>Decrease count</button>
            </>
        )
    }
}
export default ClassCounter;