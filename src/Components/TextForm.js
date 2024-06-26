import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// export default function TextForm({Label = "Example props here"}) {
export default function TextForm({ Label, placeholder, mode }) {

    const [text, setText] = useState('');
    // text = ("new text") // Wrong way to Change State
    // setText("new text") // Correct way to Change State

    const handleUpperCase = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleLowerCase = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        console.log("Lowercase was clicked");
        let newText = ('');
        setText(newText);
    }

    const handleCapitalize = () => {
        console.log("Lowercase was clicked");
        // let newText = text.toUpperCase() + text.slice(1);
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);
    }

    return (
        <>
            {/* <div className={`bg-${mode}`}> */}
            <div className={`bg-${mode}`} style={{ height: '100vh' }}>
                <div className={`container bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
                    <div className="pb-3 pt-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4" >{Label}</label>
                        <textarea className="form-control textarea" id="exampleFormControlTextarea1" rows="8" placeholder={placeholder} value={text} onChange={handleOnChange}></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCapitalize}>Capitalize</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClear}>Clear Text</button>
                </div>
                <div className={`container py-3 bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
                    <h3>Your Text Summery</h3>
                    <p> {text.split(" ").filter((elment) => { return elment.length !== 0 }).length} word & {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((elment) => { return elment.length !== 0 }).length} Minutes to read</p>
                    <h4>Preview</h4>
                    {/* <p>{text}</p> */}
                    <p>{text === "" ? 'Enter Some Text In Textarea' : text}</p>
                    {/* <p>{text.length > 0 ? text : 'Enter Text Here'}</p> */}
                </div>
            </div>
        </>
    )
}
