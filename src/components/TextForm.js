import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("UppercCase was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","Success")
  }
  const handleLoClick =()=>{
    // console.log("UppercCase was Clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to upperCase","Success")
  }
  const handleclearClick =()=>{
    let newText = " ";
    setText(newText);
  }

  const handleOnChange =(event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }

  const handleCopy =()=>{
    console.log("I am a copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","Success")
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed extra spaces","Success")
  }


  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className = "container" style = {{color :props.mode ==='dark'?'white':'#08316b' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor :props.mode ==='dark'?'grey':'white' , color :props.mode ==='dark'?'white':'#08316b' }} id ="myBox" rows ="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>removeExtraSpaces</button>
    </div>
    <div className="container my-2" style = {{color :props.mode ==='dark'?'white':'#08316b' }}>
      <h2>Your text Summary</h2>
      <p>you text has {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} "Minutes of reading"</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here "}</p>
    </div>
    </>
  );
}
