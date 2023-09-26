import './Quiz.css'
import { QuizInfo } from '../../models/quizModel';
import { useState, useEffect } from 'react';
import ReportCard from '../ReportCard/ReportCard';
import CheckMark from '../../components/CheckMark/CheckMark';
import WrongCross from '../../components/WrongCross/WrongCross';

interface QuizProps {
    quizList: QuizInfo[];
}

const Quiz = ({ quizList }: QuizProps): JSX.Element => {

    const [questionIndex, setQuestionIndex] = useState(1)
    const [imgloaded, setImageLoaded] = useState(false)
    const [timer, setTimer] = useState(10)
    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [wrongAnswerCheck, setWrongAnswerCheck] = useState(-1)
    const [rightAnswerCheck, setRightAnswerCheck] = useState(-1)

    let options = quizList[questionIndex - 1].options

    useEffect(() => {

        const loadImage = () => {
            const img = new Image()
            img.src = quizList[questionIndex - 1].imageUrl
            img.onload = () => {
                setImageLoaded(true)
            }
        }

        console.log(timer)
        if (timer === 0) {
            console.log("submitting...")
            finalSubmission()

            let submission = setTimeout(() => {
                if (questionIndex === quizList.length) {
                    console.log("Goes to report card page")
                    setCompleted((prevState) => {
                        return prevState = true
                    })
                }

                if (questionIndex < quizList.length) {

                    setTimer((prevState) => {
                        return prevState + 10
                    })

                    setImageLoaded((prevState) => {
                        return prevState = false
                    })

                    setQuestionIndex((prevState) => {
                        return prevState + 1
                    })
                }

                // reset selectedAnswer for the next question
                setSelectedAnswer((prevState) => {
                    return prevState = -1
                })

                setWrongAnswerCheck((prevState) => {
                    return prevState = -1
                })

                setRightAnswerCheck((prevState) => {
                    return prevState = -1
                })
            }, 2500)

            return () => {
                clearTimeout(submission)
            }
        }

        let countDown = setTimeout(() => {
            if (timer > 0) {
                setTimer((prevState) => {
                    prevState = prevState - 1
                    return prevState
                })
            }
        }, 1000)

        loadImage()

        return () => clearTimeout(countDown)
    }, [questionIndex, timer, completed])

    const selection = (index: number) => {
        if (timer !== 0) {
            console.log("option " + index + " has been selected")
            // reset the background color for all

            let listNodes = document.querySelectorAll("li")
            for (let i = 0; i < listNodes.length; i++) {
                let listNode = listNodes[i]
                listNode.style.border = "white 2.5px solid";
                listNode.style.background = "white";
            }

            // change the color of the selected button
            let selectedButton = document.querySelector<HTMLElement>(".selection-" + index)
            if (selectedButton) {
                selectedButton.style.border = "yellow 2.5px solid"
                selectedButton.style.background = "yellow"

            }

            setSelectedAnswer((prevState) => {
                prevState = index
                return prevState
            })
        }
    }

    const finalSubmission = () => {
        let correctAnswer = quizList[questionIndex - 1].answer

        let options = document.querySelectorAll("li")
        for (let i = 0; i < options.length; i++) {
            if (i !== correctAnswer && i !== selectedAnswer) {
                let option = options[i]
                option.style.border = "white 2.5px solid"
                option.style.background = "white"
            }
        }

        if (selectedAnswer !== correctAnswer) {
            setWrongAnswerCheck((prevState) => {
                return prevState = selectedAnswer
            })

            let selectedOption = document.querySelector<HTMLElement>(".selection-" + selectedAnswer)
            if (selectedOption) {
                selectedOption.style.border = "red 2.5px solid"
                selectedOption.style.background = "red"
            }

            let correctOption = document.querySelector<HTMLElement>(".selection-" + correctAnswer)
            if (correctOption) {
                correctOption.style.border = "green 2.5px solid"
                correctOption.style.background = "green"
            }
        } else {
            //got it right
            setCorrectAnswer((prevState) => {
                return prevState + 1
            })

            setRightAnswerCheck((prevState) => {
                return prevState = selectedAnswer
            })
            let correctOption = document.querySelector<HTMLElement>(".selection-" + selectedAnswer)
            if (correctOption) {
                correctOption.style.border = "rgb(155, 255, 155) 2.5px solid"
                correctOption.style.background = "rgb(155, 255, 155)"
            }
        }
    }

    const hoverEffect = (key: number) => {
        if (timer !== 0) {
            let options = document.querySelectorAll("li")
            for (let i = 0; i < options.length; i++) {
                if (i !== selectedAnswer) {
                    let option = options[i]
                    option.style.border = "white 2.5px solid"
                    option.style.background = "white"
                }
            }

            if (key !== selectedAnswer) {
                console.log("mouse over detected on " + key)
                let hoveredOption = document.querySelector<HTMLElement>(".selection-" + key)
                if (hoveredOption) {
                    hoveredOption.style.border = "grey 2.5px solid"
                    hoveredOption.style.background = "grey"
                }
            }
        }
    }

    const leaveEffect = (key: number) => {
        if (timer !== 0) {
            if (key !== selectedAnswer) {
                console.log("leaving option: " + key)
                let hoveredOption = document.querySelector<HTMLElement>(".selection-" + key)
                if (hoveredOption) {
                    hoveredOption.style.border = "white 2.5px solid"
                    hoveredOption.style.background = "white"
                }
            }
        }
    }


    return (

        <div className="Quiz">
            {!completed ? (
                <div className="App-header">
                    <div className="quiz-body">
                        {imgloaded ? (
                            <div className="question-frame">
                                <h1>Quiz {questionIndex}/{quizList.length}</h1>
                                <img src={quizList[questionIndex - 1].imageUrl} alt={"question" + questionIndex.toString()}></img>
                                <div className="timer-frame">
                                    <h2>{timer}</h2>
                                </div>
                                <p>{quizList[questionIndex - 1].question}</p>
                                <ul className="option-frame">
                                    {options.map((item, index) => {
                                        return <div key={"key-" + index} className="option-container">
                                            <WrongCross id={index} activated={wrongAnswerCheck} />
                                            <li onMouseOver={() => { hoverEffect(index) }} onMouseLeave={() => { leaveEffect(index) }} onClick={() => { selection(index) }} className={"selection-" + index} key={"selection-" + index}>{item}</li>
                                            <CheckMark id={index} activated={rightAnswerCheck} />
                                        </div>
                                    })}
                                </ul>
                            </div>
                        ) : (<div><h1>Loading......</h1></div>)}
                    </div>
                </div>
            ) :
                <ReportCard correct={correctAnswer} total={quizList.length} />
            }
        </div >
    )
}

export default Quiz