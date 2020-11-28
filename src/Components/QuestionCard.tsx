import React from 'react'
import './QuestionCard.css'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {

    return (
        <div>
            <p> Question {questionNum} / {totalQuestions} </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />

            {answers.map((answer, questionNum) => (
                <div key={questionNum}>
                    <button
                        disabled={userAnswer}
                        value={answer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}

        </div>
    )
}

export default QuestionCard;