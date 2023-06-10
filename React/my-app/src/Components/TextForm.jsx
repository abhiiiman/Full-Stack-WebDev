import React, { useState } from 'react';
import "C:/Users/DELL/OneDrive/Desktop/WebDev/React/my-app/src/App.css";

const TextForm = (props) => {

    const upperOnClick = () => {
        let upperText = inputText.toUpperCase();
        setInputText(upperText);
    }

    const lowerOnClick = () => {
        let lowerText = inputText.toLowerCase();
        setInputText(lowerText);
    }

    const clearOnClick = () => {
        setInputText("");
    }

    const readOnClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = inputText;
        window.speechSynthesis.speak(msg);
    }

    const copyOnClick = () => {
        var getText = document.getElementById("text-area");
        getText.select();
        navigator.clipboard.writeText(getText.value);
    }

    const removeOnClick = () => {
        let noExtraSpaceText = inputText.split(/[ ]+/); // regex
        setInputText(noExtraSpaceText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("TextArea has been changed!");
        setInputText(event.target.value)
    }

    const [inputText, setInputText] = useState("");

    return (
        <div className="container my-3">

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2 className='my-heading'><strong>{props.textTitle}</strong></h2></label>
                <textarea id = "text-area" className="my-text-area form-control" value={inputText} onChange={handleOnChange} rows="8"></textarea>
            </div>

            {/* buttons. */}
            <button className="my-btns btn" onClick={upperOnClick}>Convert to UpperCase</button>
            <button className="my-btns btn mx-2" onClick={lowerOnClick}>Convert to LowerCase</button>
            <button className="my-btns btn" onClick={removeOnClick}>Remove Extra Space</button>
            <button className="my-btns btn mx-2" onClick={clearOnClick}>Clear</button>
            <button className="my-btns btn" onClick={readOnClick}>Read</button>
            <button className="my-btns btn mx-2" onClick={copyOnClick}>Copy</button>

            <div className="container my-3">
                <h2 className='my-heading'><strong>Your Text Summary</strong></h2>
                <p><strong>{inputText.split(" ").length}</strong> Words and <strong>{inputText.length}</strong> Characters</p>
                <label><strong>{0.008 * inputText.split(" ").length}</strong> Minute Read</label>
            </div>
            <div className="container my-3">
                <h3 className='my-heading'>Preview</h3>
                <p><strong>{inputText}</strong></p>
            </div>
            <button className="my-btns btn">Enable Dark Mode</button>
        </div>
    )
}

export default TextForm;