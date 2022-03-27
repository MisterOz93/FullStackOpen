const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const api = supertest(app)

describe('with a single user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const user = new User({ username: 'Foo', password: 'pw'})
    await user.save()
  }, 15000)
  /* does not work currently need to fix
    test('log in successful with proper name & pw', async () => {
    const data = await User.find({})
    const found = await User.findOne( data[0])
    console.log(found)
    await api.post('/api/login')
      .send(data[0])
      .expect(200)
  }) */
})
afterAll( () => mongoose.connection.close())