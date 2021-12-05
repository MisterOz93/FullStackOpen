import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleCountry = ({country}) => {
  return(
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Population (according to <a href='https://restcountries.com/#rest-countries'> REST Countries API</a>): {country.population}</p>
      <h3>Languages:</h3>
      <ul>
      <p>{Object.values(country.languages).map(value => <li key={value}>{value}</li>)}</p>
      </ul>
      <p><img src={country.flags.png} alt={`the flag of ${country.name.common}`} height='100' width='250'></img></p>

    </div>
  )
}

const MultipleCountries = ({countries}) => {
  const [currentCountries, setCountries] = useState(countries)
  const handleClick = (country) => setCountries([country])
  if (currentCountries.length === 1){
    return(
      <SingleCountry country={currentCountries[0]}/>
    )
  }
   
  return(
    <div>

      {currentCountries.map(country => (
        <li key={country.name.common}>{country.name.common} <button onClick={()=>handleClick(country)} > Show</button></li> 
      ))}
    </div> 
  )
}

const Display = ({query, items}) => {
  const filtered = items.filter(item => item.name.common.toLowerCase().includes(query))
  if (query === ''){
    return(
      <></>
    )
  }
  if (filtered.length > 10){
    return (
    <p>Too many matches, please be more specific.</p>
    )
    } else if (filtered.length > 1){
      return(
        <MultipleCountries countries={filtered}/>
      )
    } else if (filtered.length === 1) {
      return(
        <SingleCountry country={filtered[0]}/>
      )
    }
  return(
    <>
    </>
  )
}

const App = () => {
const [userSearch, setUserSearch] = useState('');
const [data, setData] = useState([]);

const fetchData = () => {
  axios.get('https://restcountries.com/v3.1/all')
  .then(response => {setData(response.data)})
}

useEffect(fetchData, []);

const countries = data

const handleSubmit = (event) => {
  event.preventDefault();
}

const updateSearch = (event) => {
  setUserSearch(event.target.value)
}

return (

<div>
  <form onSubmit={handleSubmit}>
    find countries &nbsp;
    <input value={userSearch} onChange={updateSearch}></input>
  </form>
  <Display query={userSearch.toLowerCase()} items={countries}/>
</div>
)
}

export default App
