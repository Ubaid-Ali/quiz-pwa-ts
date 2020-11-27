import React, { useState } from 'react';
import { Difficulty, fetchQuestions } from './Api/Api';
import './App.css';

import QuestionCard from './Components/QuestionCard';


const TOTAL_QUESTIONS = 10;


type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {


  const [questions, setQuestions] = useState();
  const [quizEnd, setQuizEnd] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [userAnswers, setUesrAnswers] = useState<AnswerObject[]>([]);
  const [num, setNum] = useState(0);

  const startQuiz = async () => {
    fetchQuestions(10,Difficulty.EASY);
    setQuizEnd(false);
  }


  return (
    <div className="App">
      <div className="App-header">



        {/* START BUTTON */}
        <h1>Quiz App</h1>
        {quizEnd || userAnswers.length === TOTAL_QUESTIONS ?
          <button onClick={startQuiz}> Start Quiz </button> :
        null}

        {/* SCORE */}
        {!quizEnd ? (<p>Score: {score} </p>) : null}

        {/* LOADING */}
        {loading ? <p>Loading...</p> : null}

        {/* QUESTIONS ANSWERS*/}
        {!loading && !quizEnd ? 
          <QuestionCard

          /> :
        null}

          {/* NEXT BUTTON */}
          {!loading && !quizEnd && userAnswers.length === num+1 && num !== TOTAL_QUESTIONS -1 ?
            <button>Next</button>
          :null}

      </div>
    </div>
  );
}

export default App;
