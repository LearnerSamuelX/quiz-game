import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [loaded, setLoaded] = useState(false)
  const [quizInfo, setQuizInfo] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      console.log("Inside fetchData()")
      let quiz_url = process.env['REACT_APP_QUIZ_URL']
      if (quiz_url) {
        let { data } = await axios.get(quiz_url)
        setQuizInfo(data)
        setLoaded((prev) => {
          prev = true
          return prev
        })
      }
    }

    if (!loaded) {
      fetchData()
    }

  }, [quizInfo, loaded])

  return (
    <div className="App">
      <div className="App-header">
        <div className="quiz-body">
          <div className="question-frame">
            {/* <img src={quizInfo[0]['imageUrl']} alt="img"></img> */}
            {/* <p>{quizInfo[0]['question']}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
