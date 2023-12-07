// import React, { useContext } from "react";
// import { MyContext } from "./QuestionBox";
// import './Results.css';

// function Result() {
//   const { score, correctquestions, totalquestions } = useContext(MyContext);


//   return (
//     <>
//     <div id="resultbox">
//     <div id="score">You scored {score*(100/5)}%</div>;
//     <h1 style={{textAlign:'center'}}>Question {correctquestions} out of {totalquestions} is correct</h1>
//     <div id='finalscore'>YOU SCORED {score*(100/5)}%</div>
//     </div>


//     </>
//   )
// }

// export default Result;
import React, { useContext } from "react";
import { MyContext } from "./QuestionBox";
import './Results.css';

function Result() {
  const { score, correctquestions, totalquestions, mode } = useContext(MyContext);

  return (
    <>
      <div id="resultbox" className={mode}>
        {/* <div id="score">You scored {score * (100 / 5)}%</div> */}
        <h1 style={{textAlign:'center'}}>Question {correctquestions} out of {totalquestions} is correct</h1>
        <div id="finalscore">YOU SCORED {score * (100 / 5)}%</div>
      </div>
    </>
  )
}

export default Result;