import React from 'react';
import classes from './InputField.module.scss';

const InputField = (props) => {
    return (
        <input className={classes.InputField} type="text" name="" id=""  onKeyDown={props.keyPressedTest}/>
    );
};

export default InputField;