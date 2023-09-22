import './Quiz.css'
import { QuizInfo } from '../../models/quizModel';
import { useState, useEffect } from 'react';

interface QuizProps {
    quizList: QuizInfo[];
}

const Quiz = ({ quizList }: QuizProps): JSX.Element => {

    const [questionIndex, setQuestionIndex] = useState(1)
    const [imgloaded, setImageLoaded] = useState(false)
    const [timer, setTimer] = useState(10)

    let options = quizList[questionIndex - 1].options

    useEffect(() => {

        const loadImage = () => {
            const img = new Image()
            img.src = quizList[questionIndex - 1].imageUrl
            img.onload = () => {
                setImageLoaded(true)
            }
        }

        loadImage()
    }, [questionIndex, quizList])


    return (
        <div className="Quiz">
            <div className="App-header">
                <div className="quiz-body">
                    {imgloaded ? (
                        <div className="question-frame">
                            <h1>Quiz {questionIndex}/{quizList.length}</h1>
                            <img src={quizList[questionIndex - 1].imageUrl} alt={"question" + questionIndex.toString()}></img>
                            <p>{quizList[questionIndex - 1].question}</p>
                            <ul className="option-frame">
                                {options.map((item, index) => {
                                    return <li className={"selection-" + index} key={"selection-" + index}>{item}</li>
                                })}
                            </ul>
                        </div>
                    ) : (<div></div>)}
                </div>
            </div>
        </div >
    )
}

export default Quiz