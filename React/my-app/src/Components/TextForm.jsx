import React, { useState } from 'react';
import "C:/Users/DELL/OneDrive/Desktop/WebDev/React/my-app/src/App.css";

const TextForm = (props) => {

    const upperOnClick = () => {
        let upperText = inputText.toUpperCase();
        setUpperText(upperText);
    }

    const lowerOnClick = () => {
        let lowerText = inputText.toLowerCase();
        setUpperText(lowerText);
    }

    const clearOnClick = () => {
        setUpperText("");
    }

    const readOnClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = inputText;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => {
        // console.log("TextArea has been changed!");
        setUpperText(event.target.value)
    }

    const [inputText, setUpperText] = useState("");

    return (
        <div className="container my-3">

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2 className='my-heading'><strong>{props.textTitle}</strong></h2></label>
                <textarea className="my-text-area form-control" value={inputText} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>

            {/* buttons. */}
            <button className="my-btns btn" onClick={upperOnClick}>Convert to UpperCase</button>
            <button className="my-btns btn mx-2" onClick={lowerOnClick}>Convert to LowerCase</button>
            <button className="my-btns btn md-2" onClick={clearOnClick}>Clear</button>
            <button className="my-btns btn mx-2" onClick={readOnClick}>Read</button>

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