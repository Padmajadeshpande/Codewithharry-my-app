import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUPClick=()=>{
        //console.log("upper case"+text);
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleOnChange=(event)=>{
        //console.log("Onchange")
        setText(event.target.value);
    }

        const handleLowerClick=()=>{
            let newTextlower=text.toLowerCase();
            setText(newTextlower)
            props.showAlert("Converted to lowercase","success")
        }
      const  handleclearTextClick=()=>{
        let cleartext='';
        setText(cleartext)
      }

      const handleCopy=()=>{
        var text=document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        
      }
      const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
      }
    
    const[text,setText]=useState('Enter your text');
  //text="new text"  //wrong way to change state
  //setText("new text") //correct way to change state
  
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control my-2" value ={text}  onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
color:props.mode==='dark'?'white':'#042743'}}></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPClick} >Convert to Uppercase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick} >Convert to LowerCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearTextClick} >Clear Text</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
</div>
    </div>
    <div className="container my-2 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
