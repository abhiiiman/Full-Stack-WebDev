import React, { useState } from 'react';
import "../App.css";

const TextForm = (props) => {

    const upperOnClick = () => {
        let upperText = inputText.toUpperCase();
        setInputText(upperText);
        props.showAlert("Converted to uppercase!", "Success");
    }

    const lowerOnClick = () => {
        let lowerText = inputText.toLowerCase();
        setInputText(lowerText);
        props.showAlert("Converted to lowercase!", "Success");
    }

    const clearOnClick = () => {
        setInputText("");
        props.showAlert("Textarea has been cleared now!", "Success");
    }

    const readOnClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = inputText;
        window.speechSynthesis.speak(msg);
    }

    const copyOnClick = () => {
        navigator.clipboard.writeText(inputText);
        props.showAlert("Text copied to the clipboard!", "Success");
        // if (str){
        //     props.showAlert("Text copied to the clipboard!", "Success");
        // }
        // else{
        //     props.showAlert("Nothing to copy, Texarea is Empty!", "Warning");
        // }
    }

    const removeOnClick = () => {
        let noExtraSpaceText = inputText.split(/[ ]+/); // regex
        setInputText(noExtraSpaceText.join(" "));
        props.showAlert("Extra spaces has been removed!", "Success");
    }

    const handleOnChange = (event) => {
        // console.log("TextArea has been changed!");
        setInputText(event.target.value)
    }

    const wordCount = (str) => {
        let words = 0;
        if (str === "") {
            words = 0;
        }
        else {
            words = str.trim().split(/\s+/).length;
        }
        return words;
    }

    const readTimeCount = (str) => {
        let time = 0;
        if (str === 0) {
            time = 0;
        }
        else {
            time = (wordCount(inputText) / 130).toFixed(1);
        }
        return time;
    }

    const previewText = (str) => {
        if (str === "") {
            return "Enter something above to preview here."
        }
        else {
            return str;
        }
    }

    const [inputText, setInputText] = useState("");

    return (
        <div className="container my-3">

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2 className='my-heading'><strong>{props.textTitle}</strong></h2></label>
                <textarea id="text-area" className="my-text-area form-control" value={inputText} onChange={handleOnChange} rows="8"></textarea>
            </div>

            {/* buttons. */}
            <button className="my-btns btn mx-1 my-1" onClick={upperOnClick} disabled={inputText.length === 0}>Convert to UpperCase</button>
            <button className="my-btns btn mx-1 my-1" onClick={lowerOnClick} disabled={inputText.length === 0}>Convert to LowerCase</button>
            <button className="my-btns btn mx-1 my-1" onClick={removeOnClick} disabled={inputText.length === 0}>Remove Extra Space</button>
            <button className="my-btns btn mx-1 my-1" onClick={clearOnClick} disabled={inputText.length === 0}>Clear</button>
            <button className="my-btns btn mx-1 my-1" onClick={readOnClick} disabled={inputText.length === 0}>Read</button>
            <button className="my-btns btn mx-1 my-1" onClick={copyOnClick} disabled={inputText.length === 0}>Copy</button>

            <div className="container my-3">
                <h2 className='my-heading'><strong>Your Text Summary</strong></h2>
                <p className='text-data'><strong>{wordCount(inputText)}</strong> Words and <strong>{inputText.length}</strong> Characters</p>
                <label className='text-data'><strong>{readTimeCount(inputText)}</strong> Minute Read</label>
            </div>
            <div className="container my-3">
                <h3 className='my-heading'>Preview</h3>
                <p className='text-data'><strong>{previewText(inputText)}</strong></p>
            </div>
        </div>
    )
}

export default TextForm;