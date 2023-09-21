import './Quiz.css'
import { QuizInfo } from '../../models/quizModel';
import { useState } from 'react';

interface QuizProps {
    quizList: QuizInfo[];
}

const Quiz = ({ quizList }: QuizProps): JSX.Element => {

    const [questionIndex, setQuestionIndex] = useState(1)
    const [timer, setTimer] = useState(10)

    let options = quizList[questionIndex - 1].options


    return (
        <div className="Quiz">
            <div className="App-header">
                <div className="quiz-body">
                    <div className="question-frame">
                        <h1>Quiz 0/{questionIndex}</h1>
                        <img src={quizList[questionIndex - 1].imageUrl} alt={"question" + questionIndex.toString()}></img>
                        <p>{quizList[questionIndex - 1].question}</p>
                        <div className="option-frame">
                            {options.map((item) => {
                                return <p>{item}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Quiz