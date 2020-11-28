import { shuffleArray } from '../Utilities/Utilities'


export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const questionLink = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(questionLink)).json();
    
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
};


type Question = {
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}


export type QuestionState = Question & { answers: string[] };