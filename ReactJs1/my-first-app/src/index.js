import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const test = React.createElement('div', {
    id: 'test-id',
    class: 'test-class'
}, <div>hello</div>);

const onClick = () => { alert('hello from custom button')};
const btnId = 'btn-test-id';
const CustomButton = () => {
    return (
        <button onClick={onClick} id={btnId}>Click me</button>
    );
};

const testBtn = React.createElement(CustomButton);

ReactDOM.render(
    <CustomButton/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
