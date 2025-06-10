import React , {useState}from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
     const handleTitleClick = ()=> { 
      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); 
       
        setText(newText)
        props.showAlert("Converted to Titlecase", "success")
    }
     const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
        }  

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed", "success")
    }
  return ( 
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
      <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743', caretColor:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Convert to Titlecase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return CustomElementRegistry.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return CustomElementRegistry.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
