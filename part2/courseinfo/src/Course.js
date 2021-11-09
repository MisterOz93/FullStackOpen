import React from 'react';

const Course = ({course}) => {
    const total = course.parts.reduce(function (sum, part){return sum + part.exercises}, 0)
    return(
      <>
      <h2>{course.name}</h2>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p> )}
      <p><strong>Total of {total} exercises</strong></p>
  
      </>
    )
  }

export default Course; 