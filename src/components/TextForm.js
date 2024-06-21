import React  ,{useState} from 'react'



export default function TextForm({mode='light' ,heading='default',showAlert}) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        showAlert("changed to uppercase","success");
    }

    const handleOnChange=(event)=>{

        setText(event.target.value);
    }

    const getWordCount=(text)=>{
      const trimText=text.trim();
      if(trimText===''){
        return 0;
      }
      return text.split(/\s+/).length;
    }
    
    const[text,setText]=useState('enter text here');
    

  return (
    <>
    <div className='container' style={{color:mode==='light'?'black':'white' }}>
        <h1>{heading}-</h1>
        <div className="mb-3 ">
  <textarea className="form-control"id="mybox" style={{ backgroundColor:mode==='light'?'white':'grey',color: mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
    </div>
    <div className="container my-3"  style={{color:mode==='light'?'black':'white' }}>
      <h1>your text summary</h1>

      <p>{getWordCount(text)} words and {text.length} characters</p>
    </div>
    </>
  )
}
