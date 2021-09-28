import React from 'react';

const Header = (props) => {
  return(
  <h1>{props.course}</h1> 
  )
}

const Content = (props) => {
  const array = props.parts
    return(  //look up how to do this using a loop
      <div>
        <p> {array[0].name} {array[0].exercises}</p>
        <p> {array[1].name} {array[1].exercises}</p>
        <p> {array[2].name} {array[2].exercises}</p>
      </div>
    )
}

const Total = (props) => {
  const array = props.parts
  return( //again, should loop here.
    <div>
    Number of exercises {array[0].exercises + array[1].exercises + array[2].exercises}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [ {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
]
  return (
    <div>
    <Header course={course} /> 
    <Content parts={parts}/>
    <Total parts={parts}/>
    </div>
  );
}

export default App;
