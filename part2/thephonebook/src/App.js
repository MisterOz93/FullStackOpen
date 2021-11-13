import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch] = useState('')

  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPersons = search === ''
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already in the phonebook.`)
    }
    else if(persons.map(person => person.number).includes(newNumber)){
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
      <form>
        Show only names containing <input value={search} onChange={changeSearch}/>
        </form>
      <h2>Add a new: </h2>
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
        {filteredPersons.map(person => <li key={person.name}>{(person.name)} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App