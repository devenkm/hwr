import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
    constructor(props){
        super(props);
        //The name and country are set when the component is created, and not when it is rendered.
        this.state = {
            name: chance.first(),
            country: chance.country({full:true})
        }
    }


    buttonClicked(){
        this.forceUpdate();
        console.log('Button was clicked')
    }

    render(){

        //return <p>{this.props.message} </p>
        return<div> <p>Hello, {this.state.name} </p>
            <p>You are from {this.state.country}</p>
            <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>

        </div>

    }
}
export default Detail;