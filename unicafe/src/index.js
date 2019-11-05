import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p><b>give feedback</b></p>
      <Button text="good" click={() => setGood(good +1)}/>
      <Button text="neutral" click={() => setNeutral(neutral + 1)}/>
      <Button text="bad" click={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) =>(
    <button onClick={props.click}>
        {props.text}
    </button>
)

const Statistics = (props) =>{
    if(props.good + props.neutral + props.bad == 0){
        return(
            <p>No feedback given</p>
        )
    }else{
        return(
            <table>
                <tr><p><b>Statistics</b></p></tr>
                <Statistic text="Good" stat={props.good} />
                <Statistic text="Neutral" stat={props.neutral} />
                <Statistic text="Bad" stat={props.bad} />
                <Statistic text="All" stat={props.good + props.neutral + props.bad} />
                <Statistic text="Average" stat={(props.good * 1 + props.bad * -1) / (props.good + props.neutral + props.bad)} />
                <Statistic text="Positive" stat={(props.good/(props.good + props.neutral + props.bad)) * 100 } />
            </table>
        )
    }
    
}

const Statistic = (props) =>(
    <tr><th>{props.text}</th> : <th>{props.stat}</th></tr>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)