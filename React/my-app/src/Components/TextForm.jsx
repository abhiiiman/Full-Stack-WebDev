import React, { useState } from 'react';

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
                <label for="exampleFormControlTextarea1" className="form-label"><h2>{props.textTitle}</h2></label>
                <textarea className="form-control" value={inputText} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>

            {/* buttons. */}
            <button className="btn btn-primary" onClick={upperOnClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={lowerOnClick}>Convert to LowerCase</button>
            <button className="btn btn-primary md-2" onClick={clearOnClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={readOnClick}>Read</button>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><strong>{inputText.split(" ").length}</strong> Words and <strong>{inputText.length}</strong> Characters</p>
                <label><strong>{0.008 * inputText.split(" ").length}</strong> Minute Read</label>
            </div>
            <div className="container my-3">
                <h3>Preview</h3>
                <p><strong>{inputText}</strong></p>
            </div>
        </div>
    )
}

export default TextForm;