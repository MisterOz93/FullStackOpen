import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ( {search, onChange}) => {

  return(
    <form>
        Show only names containing <input value={search} onChange={onChange}/>
    </form>
  )


}

const PersonForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit}>
    <p>name: <input value={props.name} onChange={props.nameChange}></input></p>
    <p>number:<input value={props.number} onChange={props.numberChange}></input></p>
    <button type="submit">add</button>
    </form>
  )
}

const Persons = ({filteredPersons}) => {
  return(
    <ul> 
    {filteredPersons.map(person => <li key={person.id}>{(person.name)} {person.number}</li>)}
  </ul>
  )

}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch] = useState('')

  const fetchData = () => {
    axios.get('http://localhost:3001/persons')
      .then(response => {setPersons(response.data)})
  }

  useEffect(fetchData, [])

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
    if (newName === ''){ return}
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already in the phonebook.`)
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
      <Filter search={search} onChange={changeSearch}/>
      <h2>Add a new: </h2>
      <PersonForm handleSubmit ={handleSubmit} name={newName} nameChange={changeName} 
        number = {newNumber} numberChange={changeNumber}/>
      <h2>Numbers</h2>
     <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App