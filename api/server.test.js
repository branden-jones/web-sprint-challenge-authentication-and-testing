// Write your tests here
const db = require('../data/dbConfig')
const request = require('supertest')
const bcrypt = require('bcrypt')
const server = require('./server')

test('[0] sanity', () => {
  expect(true).not.toBe(false)
})

  afterAll(async () => {
    await db.destroy()
  })

  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run()
  })

  

  describe('register', () => {
    test('[1] creates a new user', async () => {
      await request(server).post('/api/auth/register').send({username:'anna', password: '1234'})
      const newPeep = await db('users').where('username', 'anna').first()
      expect(newPeep).toMatchObject({ username: "anna" }) 
    })
    test('[2] responds with error if username already exists', async () => {
      const results = await request(server).post('/api/auth/register').send({ username: 'ted', password: 1234})
      console.log(`body`,results.body, `message`, results.body.message)
      expect(results.body).toMatch(/taken/i)
    })
  })

  describe('login', () => {
    test('[3] checks login', async () => {
      const results = await request(server).post('/api/auth/login').send({ username: 'ted', password: '1234'})
      expect(results.body.message).toMatch(/welcome/i)
    })

    test('[4] check invalid login', async () => {
      const results = await request(server).post('/api/auth/login').send({ username: 'iDontExist', password: 'doesnt matter'})
      expect(results.body).toMatch(/invalid credentials/i)
    })

  })