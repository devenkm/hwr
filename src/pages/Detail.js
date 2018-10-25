import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
    buttonClicked(){
        this.forceUpdate();
        console.log('Button was clicked')
    }

    render(){

        //return <p>{this.props.message} </p>
        return<div> <p>Hello, {chance.first()} </p>
            <p>You are from {chance.country({full:true})}</p>
            <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>

        </div>

    }
}
export default Detail;