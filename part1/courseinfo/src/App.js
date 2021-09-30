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
  let total = 0;
  array.forEach(element => {
    total += element.exercises;
  });
  return(
    <div>
    Number of exercises {total}
    </div>
  )
}

const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [ 
      {
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
  }
  return (
    <div>
    <Header course={course.name} /> 
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
  );
}

export default App;
