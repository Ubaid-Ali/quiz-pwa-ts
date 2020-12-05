import React, { useState, useEffect } from 'react';
import { Difficulty, fetchQuestions, QuestionState } from './Api/Api';
import QuestionCard from './Components/QuestionCard';
import './App.css';

import Token from './Firebase-folder/Token'

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

type click = {
  id: string,
  color: string,
  clicked: boolean
}


function App() {

  // FIREBASE TOKEN
  useEffect(() => Token(), []);

  let [userClick, setUserClick] = useState<click>({
    id: '',
    color: '',
    clicked: false
  })

  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [num, setNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [quizEnd, setQuizEnd] = useState<boolean>(true);

  const startQuiz = async () => {
    setLoading(true);
    setQuizEnd(false);
    const newQuestions: [] = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNum(0);
    setUserClick({ color: 'normal', id: '', clicked: false })
    setLoading(false);
  }

  const nextQuestion = async () => {
    const nextQuestion: number = num + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setQuizEnd(true);
    }
    else { setNum(nextQuestion); }
    setUserClick({ color: '', id: '', clicked: false })
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    if (!quizEnd) {
      const answer: string = e.currentTarget.value;
      const correct: boolean = questions[num].correct_answer === answer;

      if (correct) {
        setScore((previous_score: number) => previous_score + 1)
        // color green
        setUserClick({ color: 'rgb(38, 255, 38)', id: e.currentTarget.id, clicked: true })
      }
      else {
        // color red
        setUserClick({ color: 'rgb(255, 53, 53)', id: e.currentTarget.id, clicked: true })
      }

      const currentAns: AnswerObject = {
        question: questions[num].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[num].correct_answer
      }
      setUserAnswers((prev) => [...prev, currentAns])
    }
  }



  return (
    <div className="App" >
      <div className="App-header" onLoad={Token}>

        {/* START BUTTON */}
        <h1 >Quiz App</h1>
        {quizEnd || userAnswers.length === TOTAL_QUESTIONS ?
          <button onClick={startQuiz} className='start-btn'> Start Quiz </button>
          : null}

        {/* SCORE */}
        {!quizEnd ? (<p>Score: {score} </p>) : null}

        {/* LOADING */}
        {loading ? <p>Loading...</p> : null}

        {/* DISPLAY QUESTIONS*/}
        {!loading && !quizEnd ?
          <QuestionCard
            questionNum={num + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[num].question}
            answers={questions[num].answers}
            userAnswer={userAnswers ? userAnswers[num] : undefined}
            callback={checkAnswer}
            userClick={userClick}
          /> :
          null}

        {/* NEXT BUTTON */}
        {!loading && !quizEnd && userAnswers.length === num + 1 && num !== TOTAL_QUESTIONS - 1 ?
          <button onClick={nextQuestion} className='next-btn' >Next</button>
          : null}

      </div>
    </div>
  );
}

export default App;
