import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText] = useState('');
  // setText('New Text');

  const handleUpclick =()=>{
      // console.log("Uppercase was Clicked" + text);
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("! Converted to UpperCase! ","success");
  }

  const handleloclick2 =()=>{
      // console.log("LowerCase was Clicked" + text);
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("! Converted to LowerCase! ","success");
  }

  // const clicktocapital =()=>{
  //     // console.log("LowerCase was Clicked" + text);
  //     let newtext = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  //     setText(newtext);
  // }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("! Text Reversed","success");
  };

  const clickonclear =()=>{
      // console.log("LowerCase was Clicked" + text);
      let newtext ='';
      setText(newtext);
      props.showAlert("! Text Cleared","success");
  }

  const handleonchange =(event)=>{
      // console.log("On change");
      setText(event.target.value)
  }

  const handleExtraspace = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    if(newtext !== "")props.showAlert("! Extra spaces removed","success");
  }
  
  const copytext = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("! Text Copied to Clipboard! ","success");
  }

  let mystyle = {
    backgroundColor: props.color,
    color: props.color === "white" ? "black" : "white",
  }

  return (
    <>
    <div style={mystyle}>
      <h1 className='mt-2'>{props.heading}</h1>
      <div className="mb-2">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Write Here</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} style={mystyle} rows="9" placeholder='Type here...'></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick} disabled={text.length ===0}>Convert To UPPERCASE</button>
      
       <button className="btn btn-primary mx-1 my-1" id='btn' disabled={text.length ===0} onClick={handleloclick2}>Convert To lowercase</button>

       {/* <button className="btn btn-primary mx-1 my-1" id='btn' onClick={clicktocapital}>Convert To Capitalized</button> */}
       <button type="submit" onClick={speak} disabled={text.length ===0} className="btn btn-primary mx-1 my-1">To Speak</button>

       <button type="submit" onClick={handleReverse} disabled={text.length ===0} className="btn btn-primary mx-1 my-1">Reverse Text</button>

       <button className="btn btn-primary mx-1 my-1" id='btn' disabled={text.length ===0} onClick={clickonclear}>Clear Text</button>

       <button className="btn btn-primary mx-1 my-1" id='btn' disabled={text.length ===0} onClick={copytext}>Copy Text</button>

       <button className="btn btn-primary mx-1 my-1" id='btn' disabled={text.length ===0} onClick={handleExtraspace}> Remove Extra Space</button>
    </div>
    <div className="container my-3" style={mystyle}>
      <h4>Your Text Summary</h4>
      {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
      <p>{text.split(/\s+/).filter((message)=>{
        return message.length !== 0;
      }).length}{" "} <b>Words</b> and {text.length} <b>Characters</b></p>
      <h4>Time Required to Read </h4>
      <p>{0.008 * text.split(" ").filter((message)=>{
        return message.length !==0;
      }).length}{" "} <b>Minutes</b></p>
      <h4>Time Required to Speak </h4>
      <p>{0.0067 * text.split(" ").filter((message)=>{
        return message.length !==0;
      }).length}{" "} <b>Minutes</b></p>
      {/* <p>{0.0067* text.split(" ").length} Minutes</p> */}
      <h3>Preview</h3>
      <p>{text === ""? "Nothing to Preview":text}</p>
    </div>
    </>
  )
}
