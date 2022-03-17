const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const api = supertest(app)

describe('when there is one user in initial state', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('password', 10)
    const user = new User({ username: 'Foo', passwordHash})
    await user.save()
  }, 15000)

  test('initial db size one', async () => {
    const initialState = await User.find({})
    expect(initialState.length).toEqual(1)
  })
  test('users must have unique username', async () =>{
    const newUser = {
      username: 'Foo',
      passwordHash: await bcrypt.hash('foo', 10)
    }
    const result = await api.post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
    expect(result.body.error).toContain('username must be unique')
  })
  test('user with unique username can be created', async () =>{
    const newUser = {
      username: 'Fooey',
      password: 'password'
    }
    await api.post('/api/users').send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    const updatedDB = await helper.usersInDB()
    expect(updatedDB.length).toEqual(2)
})

})
afterAll(() => mongoose.connection.close())