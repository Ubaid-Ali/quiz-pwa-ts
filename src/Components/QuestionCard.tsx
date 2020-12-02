import React from 'react'
import './QuestionCard.css'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
    userClick: { id: string, color: string, clicked: boolean };
}


const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions, userClick }) => {

    let AnsStyle = [
        { backgroundColor: '' }, // answer 1
        { backgroundColor: '' }, // answer 2
        { backgroundColor: '' }, // answer 3
        { backgroundColor: '' }  // answer 4
    ];

    if (userClick.clicked) {
        AnsStyle[Number(userClick.id)].backgroundColor = userClick.color
        // console.log('clicked', userClick.clicked);
        
    }else {
        AnsStyle[Number(userClick.id)].backgroundColor = ''
        // console.log('clicked', userClick.clicked);
    }

    console.log(userClick);
    

    return (
        <div>
            <p> Question {questionNum} / {totalQuestions} </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />

            {answers.map((answer, key) => {
                return (
                    <div key={key} className='answers-div'>
                        <button
                            disabled={userAnswer}
                            value={answer}
                            onClick={callback}
                            className={`answers-button`}
                            style={AnsStyle[key]}
                            id={`${key}`}
                        >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>)
            })}
        </div>
    )
}

export default QuestionCard;