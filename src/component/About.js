import React,{useState} from 'react';

export default function About(props) {
   
   const [right,set]=useState({
    color:`black`,
    backgroundColor:`white`
   })

   

   

  return (
    <>
    <div className="accordion" id="accordionExample bg-dark"  style={right}>
  <div className="accordion-item bg-dark"  style={right} >
    <h2 className="accordion-header">
      <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={right}>
        Our work
      </button>
    </h2>
    
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"  style={right}>
      <div className={`accordion-body`} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,
    color: props.mode===`dark`?`white`:`blackm`}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  
    </>
  );
}
