import React, { createContext, useEffect, useState } from "react";
import questions from "../questions";
import '../App.css';
import Result from "./Result";

// const getscore = createContext();
const MyContext = createContext();

  function QuestionBox({mode}) {
  let [number, setNumber] = useState(0);
  let [clickedcount,setclickedcount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
 const [score, setScore] = useState(0);
 const [correctquestions, setcorrectquestions] = useState(0);
  // const getquesbox = document.getElementById('questionbox').style.display='none';
  // const [questbox,setquesbox] = useState(getquesbox);
  const startquiz = ()=>{
    document.getElementById('questionbox').style.display='block'
    return setNumber(1)
  }
  useEffect(()=>{
    if(number==0){
      document.getElementById('questionbox').style.display='none'}
    })
  useEffect(()=>{
    if(number>0){
      setCurrentQuestion(()=>{
        return questions[number-1].text
      })
    }
  },[number])
  const optionclick = (index)=>{
    setclickedcount(clickedcount+1)
    console.log(clickedcount)
    
    if(number<questions.length){
      setNumber(()=>{
        return  number+1
      })
    }
    if(clickedcount===questions.length-1){
      document.getElementById('questionbox').style.display='none'      
    }
    if(questions[number-1].options[index].isCorrect && score<questions.length){
      setcorrectquestions(correctquestions+1)
      setScore(score+1)
      console.log(clickedcount)
    }
  }
    const tryAgainClick = () => {
    setNumber( number=0);
    console.log(number+'number')
    setclickedcount(0);
    console.log(clickedcount+'clickedcount')
    setScore(0);
    document.getElementById('questionbox').style.display='block'
    console.log(score+'score');
    sethighlight('HIGHLIGHT')
    setcorrectquestions(0);
  };
  const [highlight,sethighlight] = useState('HIGHLIGHT')
  const clickhighlight = () => {
    if(highlight == 'UNHIGHLIGHT'){
      sethighlight('HIGHLIGHT')
      document.getElementById('questiontext').style.color = 'black';

    }
    else{
      sethighlight('UNHIGHLIGHT')
      document.getElementById('questiontext').style.color = 'red';
      // document.getElementById('questiontext').style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
      document.getElementById('questiontext').style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
      // document.getElementById('questiontext').style.textShadow = '1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue';
    }
  };


  return (
    <>
      {number === 0 ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px', // adjust this value to set the height of the container
        }}>
          <button
          style={{
            fontSize: '20px',
            height: '40px',
            width: '300px',
            color: 'white',
            backgroundColor: 'blue',
            borderRadius: '10px',
          }}
          onClick={startquiz}
        >
          START QUIZ
        </button>
        </div>
        
      ) : (
        ''
      )}
    
      <div id='questionbox'>
     
        { number > 0 ? (
          <>
            <h1 >Question {number} out of {questions.length}</h1>
            <h1 id="questiontext">{currentQuestion}</h1>
            <div id='optionbox'>
              {questions[number-1].options.map((option, index) => (
                <div
                  className='option'
                  onClick={() => optionclick(index)}
                  key={index}
                >
                  {option.text}
                </div>
              ))}
            </div>
            <br />
        <button id="highlight" onClick={clickhighlight}>{highlight}</button>
          </>
        ) : (
          ''
        )}
      </div>
  
      {clickedcount === questions.length ? (
        <>
          <MyContext.Provider value={{score, correctquestions, totalquestions: questions.length, mode}}>
          <Result />
          </MyContext.Provider>
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px', // adjust this value to set the height of the container
        }}>
            <button
              onClick={tryAgainClick}
              style={{
                fontSize: '20px',
                height: '40px',
                width: '200px',
                color: 'white',
                backgroundColor: 'blue',
                borderRadius: '10px'
              }}
            >
              TRY AGAIN
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}
export { MyContext };
export default QuestionBox
