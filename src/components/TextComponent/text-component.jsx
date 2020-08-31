import React, { Component } from 'react';
import classes from './text-component.module.scss';

class TextComponent extends Component {
    render(props) {
        return (
        <div className={classes.textWrapper}>
            <span suppressContentEditableWarning={true} 
            className={[classes.textSentence, this.props.whiteSpacePre ? null : classes.textSentence_pre].join(' ')} onKeyDown={this.props.checkKey}
            onClick={this.props.clickedSpan} onBlur={this.props.blurState} contentEditable={this.props.editBool}>{this.props.children}</span>
        </div>
        );
    };
};

export default TextComponent;