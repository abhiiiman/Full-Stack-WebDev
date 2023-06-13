import React, { useState } from 'react';
import "../App.css";

const TextForm = (props) => {

    const upperOnClick = () => {
        let upperText = inputText.toUpperCase();
        setInputText(upperText);
        props.showAlert("Text has been converted to uppercase!", "Success");
    }

    const lowerOnClick = () => {
        let lowerText = inputText.toLowerCase();
        setInputText(lowerText);
        props.showAlert("Text has been converted to lowercase!", "Success");
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
        var getText = document.getElementById("text-area");
        getText.select();
        navigator.clipboard.writeText(getText.value);
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
        if (str === ""){
            words = 0;
        }
        else{
            words = str.trim().split(/\s+/).length;
        }
        return words;
    }

    const [inputText, setInputText] = useState("");

    return (
        <div className="container my-3">

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2 className='my-heading'><strong>{props.textTitle}</strong></h2></label>
                <textarea id="text-area" className="my-text-area form-control" value={inputText} onChange={handleOnChange} rows="8"></textarea>
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
                <p className='text-data'><strong>{wordCount(inputText)}</strong> Words and <strong>{inputText.length}</strong> Characters</p>
                <label className='text-data'><strong>{0.008 * inputText.split(" ").length}</strong> Minute Read</label>
            </div>
            <div className="container my-3">
                <h3 className='my-heading'>Preview</h3>
                <p className='text-data'><strong>{inputText}</strong></p>
            </div>
        </div>
    )
}

export default TextForm;