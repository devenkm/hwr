import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
    constructor(props){
        super(props);
        const people = [];
        for (let i = 0; i< 10;i++){
            people.push({
                name: chance.first(),
                country: chance.country({
                    full: true
                })
            })

            this.state = {people};
            //this.state = {commits: []};
        }
    }


    buttonClicked(){
        const newState ={
            name: chance.first()
        };
        this.setState(newState);
        //this.forceUpdate();
        console.log('Button was clicked')
    }

    render(){

        return (<div>
            {   //this.state.commits.map((commit, index ) => ())
                this.state.people.map((person, index) => (
                    <p key={index}>
                        Hello, {person.name} from {person.country}!
                    </p>
                ))

            }
        </div>);

    }
}
export default Detail;