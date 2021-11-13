import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already in the phonebook.`)
    }
    else if(persons.map(person => persons.number).includes(newNumber)){
      alert(`${newNumber} is already registered in the phonebook.`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
  }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={changeName}/> </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> 
        {persons.map(person => <li key={person.name}>{(person.name)} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App