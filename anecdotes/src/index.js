import ReactDOM from 'react-dom'
import React ,{useState} from 'react'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const[array, setArray] = useState(new Array(6).fill(0))
  const[mostVotes, setMostVotes] = useState(0)
  
  const vote = () =>{
      const temp = [...array]
      temp[selected] += 1
      setArray(temp);
      var max = array[0]
      var index = 0
      for(var i = 0; i < 6; i++){
          if (array[i] > max){
              max = array[i]
              index = i
          }
      }
      
      setMostVotes(index)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>Votes: {array[selected]}</p>
      <p>Most voted: {anecdotes[mostVotes]}</p>
      
      
      <Button text="Next anecdote" onClick={() => setSelected(Math.floor(Math.random() * 6))} />
      <Button text="Vote" onClick={() => vote()}/>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) =>(
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)