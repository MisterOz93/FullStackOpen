import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import serverCommunication from './components/serverCommunication'; 

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

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch] = useState('')

  const getData = () => {
    serverCommunication.getPersons()
    .then(data => {setPersons(data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

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
      number: newNumber,
      //id: newName
    }
    //***//change logic here for next part****
    if (persons.map(person => person.name).includes(newName)){ 
      const person = persons.find(person => person.name === newName)
      if (newNumber === person.number){
        alert(`${newName} is already in the phonebook with that number.`)
      } else { //person exists but number is different
        const result = window.confirm(`${person.name} is already in the phonebook, replace the old number with a new one?`)
        if (result){ 
          const changedPerson = {...person, number: newNumber}
          serverCommunication.updatePerson(person.id, changedPerson)
          .then(response => {setPersons(persons.map(p => p.id !== person.id ? p : response))})

        }
      }
  }
    else {  
      serverCommunication.createPerson(newPerson)
      .then(data => setPersons(persons.concat(data)))
      setNewName('');
      setNewNumber('');
}}
const handleClick = (Person) => {
  const result = window.confirm(`Are you sure you want to delete ${Person.name} ?`);
  if (result) {
  serverCommunication.removePerson(Person.id);
  getData()}
  
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onChange={changeSearch}/>
      <h2>Add a new: </h2>
      <PersonForm handleSubmit ={handleSubmit} name={newName} nameChange={changeName} 
        number = {newNumber} numberChange={changeNumber}/>
      <h2>Numbers</h2>
      <ul> 
        {filteredPersons.map(person => <li key={person.id}>{(person.name)} {person.number} {" "}
          <button onClick={ () => handleClick(person)}> delete </button></li>)}
      </ul>
    </div>
  )
}

export default App