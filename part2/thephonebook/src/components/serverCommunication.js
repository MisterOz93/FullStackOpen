import axios from 'axios';
const personsUrl = 'http://localhost:3001/api/persons';

const getPersons = () => {
    let request = axios.get(personsUrl)
    return request.then(response => response.data)
}

const createPerson = (Person) => { 
    let request = axios.post(personsUrl, Person);
    return request.then(response => response.data)
}

const removePerson = (id) => {
    let request = axios.delete(`${personsUrl}/${id}`);
    return request.then(response => response.data)
}

const updatePerson = (id, updatedPerson) => {
    let request = axios.put(`${personsUrl}/${id}`, updatedPerson)
    return request.then(response => response.data) //this appears to let me catch error in App.js
}
export default {getPersons, createPerson, removePerson, updatePerson}
