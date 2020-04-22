import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Statistics = props => {
  console.log(props)
  const all = props.good + props.neutral + props.bad
  const avg = (props.good * 1 + props.neutral * 0 + props.bad * -1) / all
  const pos = (props.good / all) * 100
  return (
    <div>
      <h1>statistics</h1>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      all {all}<br/>
      average {avg}<br/>
      positive {pos} %
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
