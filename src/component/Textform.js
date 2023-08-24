import React, {useState} from 'react';


export default function Textform() {
  
const [text, setText]=useState(``);
function upper(){

let newtext=text.toUpperCase();
setText(newtext);
}
function lower(){
  let newtext=text.toLowerCase();
setText(newtext);
}
function change(event){
  setText(event.target.value);
  }
  
  return (
    <>
    <div>
<div className="container mb-3">
  <label htmlFor="mybox" className="form-label">Enter your text</label>
  <textarea className="form-control" value={text} onChange={change} id="mybox" rows="16"></textarea>
</div>
<button className="btn btn-primary" onClick={upper}>convert to uppercase</button>
<button className='btn mx-3 btn-primary' onClick={lower}>change to lowecase</button>
    </div>

    <div className='container2 my-5'>
<h1>
  Your Text Summary
</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>you can red this in {0.008*text.split(" ").length} minutes or in {(0.008*text.split(" ").length)*60} Seconds</p>

<h2>
  Preview
</h2>
<p>{text}</p>
    </div>
    </>
  );
}
