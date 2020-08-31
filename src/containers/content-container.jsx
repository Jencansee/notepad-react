import React, { Component } from 'react';
import classes from './content-container.module.scss';
import TextComponent from '../components/TextComponent/text-component';

class ContentContainer extends Component {
    state = {
        contentEdit: false,
        rowNumber: [[]],
        prevText: 'Here\'s where you can write.'
    };

    textClickHandler = () => {
        /*this.setState(() => {
            return {contentEdit: !this.state.contentEdit}
        });*/
        this.setState({contentEdit: true});
    };

    enterKeyHandler = (e) => {



        let keyName = e.key;
        console.log(e.key)
        if (keyName === 'Enter') {
            console.log(keyName);

            let prevState = this.state.rowNumber;
            let nextState = prevState.push();
            this.setState({rowNumber: nextState });
            
        } 
    };  

    tabKeyHandler = (e) => {
        

        if (e.key === 'Tab') {
            e.preventDefault();
            let beforeTabKey = e.target.innerText;
            
            console.log(beforeTabKey)

            beforeTabKey.split('').forEach(el => {
                console.log(el)
            });
            
            /* here should be tab + previous text */
            let afterTabKey = `${beforeTabKey}    `;
            this.setState({prevText: afterTabKey})
            console.log(this.state.prevText)
        }
    }

    /*      SAVE STATE ON BLUR      */
    blurHandler = (e) => {
        this.setState({contentEdit: false});
        console.log(`blurHandler activated contentEdit: ${this.state.contentEdit}`);

        if (this.state.prevText !== ' ') {
            this.setState({prevText: e.target.innerText});
            localStorage.setItem('textOne', this.state.prevText);
            console.log('Text is in local storage unit, now')
        }
        
    };

    componentDidMount() {
        const textOne = localStorage.getItem('textOne');
        this.setState({prevText: textOne})
        console.log(textOne)
    };

    render() {
        return (
            <div className={classes.contentContainer}>
                <h1>This is notepad in the Web</h1>
                <p>You can edit your text files, make to-do lists and  &emsp; draw.</p>
                <br />
                <br />
            <TextComponent key="text1" clickedSpan={() => this.textClickHandler()} blurState={() => {this.blurHandler()}} 
                editBool={this.state.contentEdit} enterKeyPressed={(e) => {this.enterKeyHandler(e)}}>The age of his reckoning was uncounted. 期望的结果是什么</TextComponent>


            <TextComponent key="text2" whiteSpacePre={true} clickedSpan={() => this.textClickHandler()} blurState={() => {this.blurHandler()}} editBool={this.state.contentEdit}>Tempered by the fires of Hell, his iron will remain steadfast through the passage that preys upon the weak. For he alone was the Hell Walker, the Unchained Predator, who sought retribution in all quarters, dark and light, fire and ice, in the beginning, and the end, and he hunted the slaves of Doom with barbarous cruelty; for he passed through the divide as none but the demon had before.</TextComponent>
            {
                this.state.rowNumber.map((item, index) => {
                    return (
                        <TextComponent 
                        whiteSpacePre={false}
                        key={index} 
                        checkKey={(e) => this.tabKeyHandler(e)}
                        clickedSpan={() => this.textClickHandler()} 
                        blurState={(e) => {this.blurHandler(e)}} 
                        editBool={this.state.contentEdit}>
                            {this.state.prevText}
                            </TextComponent>
                    );
                })
            }
            {/*
                {this.state.rowNumber.map((item, index) => {
                    return(
                        <InputField key={index} keyPressedTest={(e) => {this.enterKeyHandler(e)}} />
                    );
                })}
            </div> */}
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