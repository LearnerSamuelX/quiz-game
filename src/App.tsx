import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Greeting from './pages/Greeting/Greeting';
import Quiz from './pages/Quiz/Quiz';

const App = () => {

  const [initilized, setInitialized] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [quizInfo, setQuizInfo] = useState([])

  useEffect(() => {


    let splash = setTimeout(() => {
      if (!initilized) {
        setInitialized((prev) => {
          return prev = true
        })
      }
    }, 3000)

    const fetchData = async () => {
      let quiz_url = process.env['REACT_APP_QUIZ_URL']
      if (quiz_url) {
        let { data } = await axios.get(quiz_url)
        console.log(data)
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

    return () => clearTimeout(splash)

  }, [quizInfo, loaded, initilized])


  if (!initilized) {
    return (
      <Greeting message='Welcome to the Quiz Game' />
    )
  }
  else {
    return (
      <div>
        <Quiz quizList={quizInfo} />
      </div>
    );
  }
}

export default App;
