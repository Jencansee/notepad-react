import React, { Component } from 'react';
import classes from './content-container.module.scss';
import TextComponent from '../components/TextComponent/text-component';


class ContentContainer extends Component {
    state = {
        contentEdit: false,
        checkLocalstrg: null
        
    };

    textClickHandler = () => {
        console.log(this.state.contentEdit + ' this is first state')

        /*this.setState(() => {
            return {contentEdit: !this.state.contentEdit}
        });*/
        this.setState({contentEdit: true});
        

        console.log(this.state.contentEdit + ' this is last state')
    };



/*      SAVE STATE ON BLUR      */
    blurHandler = () => {
        console.log('blur handler activated');
        this.setState({contentEdit: false});

        this.setState({checkLocalstrg: 123});

        localStorage.setItem('textOne', this.state.checkLocalstrg);
        console.log(this.state.checkLocalstrg + ' this is local storage unit');

        console.log(this.state.contentEdit);
    };

    enterKeyHandler = (e) => {
        console.log(e);
    };

    render() {
        return (
            <div className={classes.contentContainer}>
                <h1>This is notepad in the Web</h1>
                <p>You can edit your text files, make to-do lists and  &emsp; draw.</p>
                <br />
                <br />
                <TextComponent key="text1" clickedSpan={() => this.textClickHandler()} blurState={() => {this.blurHandler()}} editBool={this.state.contentEdit}>The age of his reckoning was uncounted.</TextComponent>
                <TextComponent key="text2" clickedSpan={() => this.textClickHandler()} blurState={() => {this.blurHandler()}} editBool={this.state.contentEdit}>Tempered by the fires of Hell, his iron will remain steadfast through the passage that preys upon the weak. For he alone was the Hell Walker, the Unchained Predator, who sought retribution in all quarters, dark and light, fire and ice, in the beginning, and the end, and he hunted the slaves of Doom with barbarous cruelty; for he passed through the divide as none but the demon had before.</TextComponent>
            </div>
        );
    }
};

export default ContentContainer;

/* 
References websites: 

https://draftjs.org/
https://shrib.com/#EasternWhitePelican2M0p5J2
https://texteditor.co/
https://www.memonotepad.com/
*/



/*
    handleTabKey = (e) => {
        
        console.log(e.keyCode, e.key);
        this.setState({tabKey: true});
        
        if (this.state.tabKey === true) {
            e.preventDefault();
            return <div className="key-tab"></div>;
        } 

        };

    handleKey = (e) => {
        let previousText = e.target.textContent;

        if (e.keyCode === 9) {
            e.preventDefault();

            
            return <div className="key-tab">1</div>;
            
        } 
    };

<div className="ContentContainer" contentEditable="true" onKeyDown={this.handleKey}></div>
*/