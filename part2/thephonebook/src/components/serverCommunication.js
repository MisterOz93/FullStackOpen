import axios from 'axios';
const personsUrl = 'http://localhost:3001/persons';
//add methods to get data, and to create a person

const getPersons = () => {
    let request = axios.get(personsUrl)
    return request.then(response => response.data)
}

const createPerson = (Person) => { 
    let request = axios.post(personsUrl, Person);
    return request.then(response => response.data)
}

const removePerson = (id) => {
    axios.delete(`${personsUrl}/${id}`);
}

const updatePerson = (id, updatedPerson) => {
    let request = axios.put(`${personsUrl}/${id}`, updatedPerson)
    return request.then(response => response.data)
}
export default {getPersons, createPerson, removePerson, updatePerson}
