import React,{useState} from 'react'

export default function Formss(props) {
  const handleUpClick=()=>{
    // console.log("up kr n hai ky bsduk"+ text);
    let n=text.toUpperCase();
    setText(n)
    props.showAlert("Converted to Uppercase","success")
  }
  const handlelowClick=()=>{
    // console.log("up kr n hai ky bsduk"+ text);
    let n=text.toLowerCase();
    setText(n)
    props.showAlert("Converted to lowercase","success")
  }
  const handleonchange=(event)=>{
    console.log("change wala");
    setText(event.target.value);
  }
  const[text, setText]=useState("Enter text here");
  
  return (
    <>
    <div className='car' >
        <h3 style={{color: props.mode==='light'?'black':'white'}}>{props.heading} </h3>
        <div className="mb-3">
          <label for="box"  style={{color: props.mode==='dark'?'white':'black'}}>This Web as made by AB</label>
          <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mybox" rows="5"></textarea>
        </div>
        <button className="btn btn-secondary btn-lg mx-2" onClick={handleUpClick} type="button">COnvert ot up</button>
        <button className="btn btn-secondary btn-lg mx-2" onClick={handlelowClick} type="button">COnvert ot low</button>
      
    </div>
    <div className="conta"  style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.050* text.split(" ").length} minutes to read</p>
        <p>{text.length>0?text:"No Text"}</p>
      </div>
      </>  
  )
}
