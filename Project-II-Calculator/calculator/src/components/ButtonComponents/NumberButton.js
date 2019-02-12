import React from 'react';
import './Button.css';

const contentChecker = (props) => {
    if(props.content == '0' || props.content == 'clear') {
        return 'big-btn';
    } else {
        return 'small-btn'
    }
}

const NumberButton = props => {
    return (
        <button className={contentChecker(props)}>{props.content}</button>
    )
}

export default NumberButton;