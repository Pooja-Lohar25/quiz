import React from 'react'
import { useState } from 'react'

const Quiz = ({questlist}) => {

  
  //randomise seq 
  const genRandom = ()=>{
    return Math.floor(Math.random() * 10);
  }
  
  const [index,setIndex] = useState(genRandom()); //stores currently visited index
  const [visited,setVisited] = useState([index]) //stores all visited indexes
  
  const [scores,setScr] = useState(0);
  const [msg,setMsg] = useState("All the Best");
  const [disp,setdisp] = useState(false); //display scores
  const [btndisabled,setDisabled] = useState(true)
  
  const enableNext = () =>{
    setDisabled(false)
  }
  const nextQuest = ()=>{
    console.log(visited)
    if(visited.length <=9){  
      //check correct ans
      const options = document.getElementsByName('ans')
      Array.from(options).forEach(option =>{
        if(option.checked === true && option.value === questlist[index].answer ){
          setScr(scores+1) 
        }
        option.checked = false
      })

      //set next random index
      let ind = genRandom()
      while(visited.includes(ind)){ ind = genRandom() }
      setIndex(ind)
      setVisited([...visited,ind])
      setDisabled(true)
    }
    else {
      //at the end of quiz display scores
      setdisp(true)
      const result = document.getElementById("res");
      if(scores > 5){ 
        result.style.backgroundColor = "rgba(0, 128, 0, 0.866);";
        result.style.color = "white";
        setMsg("Great Job!!! Keep it up")
      }
      else if(scores < 5){
        result.style.backgroundColor = "rgba(156, 10, 10);";
        result.style.color = "white";
        setMsg("Sorry!! you did not pass")
      }
      else{
        result.style.backgroundColor = "orange";
        result.style.color = "white";
        setMsg("Not Bad!! You could do better...Happy learning")
      }
    }
  }
  return (
    <div className='quiz-box'>
    <div className='res' id = "res">
      <p className='scr'>Scores :  { disp ? scores : ""}</p>
      <p className='msg'>{msg}</p>
    </div>
    <div className='quiz-container'>
      <div className='question'>
        <p>{questlist[index].question}</p>
      </div>
      <div className='option-container'>
            <div className='option-wrap' draggable="true"  >
                <label className = "option" htmlFor="option1">
                      <input type="radio" name='ans' id="option1" onClick={enableNext} value = {questlist[index].options[0]}/>
                      {questlist[index].options[0]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option2">
                      <input type="radio" name='ans' id="option2"  onClick={enableNext} value={questlist[index].options[1]}/>
                      {questlist[index].options[1]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option3">
                      <input type="radio" name='ans' id="option3" onClick={enableNext} value={questlist[index].options[2]}/>
                      {questlist[index].options[2]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option4">
                      <input type="radio" name='ans'  id="option4" onClick={enableNext} value={questlist[index].options[3]}/>
                      {questlist[index].options[3]}
                </label>
            </div>
        </div>
        <div className='btn-next'>
            <button  id="sb-btn" onClick={nextQuest} disabled = {btndisabled}> Next </button>
            {disp ? <button onClick={()=>{window.location.reload()}} > Play again </button> : ""}
        </div>
    </div>
    </div>
  )
}

export default Quiz
