import React from 'react'

const TextForm = (props) => {
    return (
        <div className="container my-3">
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2>{props.textTitle}</h2></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary">Convert to UpperCase</button>
        </div>
  )
}

export default TextForm;