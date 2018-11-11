// import FormContainer from "./js/components/container/FormContainer";
// console.log('React is up and running!');

//https://www.valentinog.com/blog/react-webpack-babel/

import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './pages/Detail';

ReactDOM.render(
    <Detail message="This is coming from props!"/>, document.getElementById('app')
);