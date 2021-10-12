import React, { useState } from 'react'

const Header = ({header}) => {
  return(
    <>
    <h1><strong>{header}</strong></h1>
    </>
  )
}

const Button = ({handleClick, name}) => {
  return(
      <button onClick={handleClick}>{name}</button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header header='Give Feedback' />
      <Button name='Good' handleClick={() => setGood(good + 1)}/>
      <Button name='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button name='Bad' handleClick={() => setBad(bad + 1)}/>
      <Header header='Statistics' />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div> 
  )
}

export default App