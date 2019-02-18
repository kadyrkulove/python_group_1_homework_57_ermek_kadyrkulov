import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

const Alert = props => (
    props.show ?
        <div
            className={['Alert', props.type].join(' ')}
        >
            {props.children}

            {props.dismiss === undefined ? null :  <Button buttonType={props.dismiss}>HIDE</Button> }
        </div>
    : null
);

export default Alert;