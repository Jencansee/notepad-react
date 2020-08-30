import React from 'react';
import classes from './text-component.module.scss';

const TextComponent = (props) => {
    return (
        <div className={classes.textWrapper}>
            <span className={classes.textSentence} onClick={props.clickedSpan} onBlur={props.blurState} contentEditable={props.editBool}>{props.children}</span>
        </div>
    );
};

export default TextComponent;