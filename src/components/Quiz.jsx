import React from 'react'
import { useState } from 'react'

const Quiz = ({questlist}) => {
  var randomnums = [];
  const genRandom = ()=>{
    return Math.floor(Math.random() * 10);
  }
  randomnums.push(genRandom())

  const [index,setIndex] = useState(randomnums[0]);
  const [scores,setScr] = useState(0);
  const [msg,setMsg] = useState("All the Best");
  const [disp,setdisp] = useState(false);

  const nextQuest = ()=>{
    if(index < 9){
      const options = document.getElementsByName('ans')
      Array.from(options).forEach(option =>{
        if(option.checked === true && option.value === questlist[index].answer ){
          setScr(scores+1) 

        }
      })

      setIndex(index+1)
    }
    else {
      setdisp(true)
      const result = document.getElementById("res");
      if(scores > 5){ 
        result.style["background-color"] = "rgba(0, 128, 0, 0.866);";
        result.style.color = "white";
        setMsg("Great Job!!! Keep it up")
      }
      else if(scores < 5){
        result.style["background-color"] = "rgb(156, 10, 10)";
        result.style.color = "white";
        setMsg("Sorry!! you did not pass")
      }
      else{
        result.style["background-color"] = "orange";
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
                      <input type="radio" name='ans' id="option1"  value = {questlist[index].options[0]}/>
                      {questlist[index].options[0]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option2">
                      <input type="radio" name='ans' id="option2" value={questlist[index].options[1]}/>
                      {questlist[index].options[1]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option3">
                      <input type="radio" name='ans' id="option3" value={questlist[index].options[2]}/>
                      {questlist[index].options[2]}
                </label>
            </div>
            <div className='option-wrap'  draggable="true" >
                <label  className = "option" htmlFor="option4">
                      <input type="radio" name='ans'  id="option4" value={questlist[index].options[3]}/>
                      {questlist[index].options[3]}
                </label>
            </div>
        </div>
        <div className='btn-next'>
            <button onClick={nextQuest} > Next </button>
        </div>
    </div>
    </div>
  )
}

export default Quiz
