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
    let request = axios.delete(`${personsUrl}/${id}`);
}
export default {getPersons, createPerson, removePerson}
