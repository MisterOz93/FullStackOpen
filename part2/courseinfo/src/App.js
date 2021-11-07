import React from 'react';
//import ReactDOM from 'react-dom';

const Course = ({course}) => {
  const total = course.parts.reduce(function (sum, part){return sum + part.exercises}, 0)
  return(
    <>
    <h1>{course.name}</h1>
    {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p> )}
    <p><strong>Total of {total} exercises</strong></p>

    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course}/>
}
export default App; 
