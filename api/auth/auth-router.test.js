const db = require('../../data/dbConfig')
const request = require('supertest')
const bcrypt = require('bcrypt')
const server = require('/api/server')

test('sanity', () => {
  expect(true).not.toBe(false)
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })

  beforeEach(async () => {
    await db.seed.run()
  })

  describe('register', () => {
    test('creates a new user', async () => {
      const newUser = { username: 'branden', password: 1234 }
      await request(server).post('api/auth/register').send(newUser)
      const newPeep = await db('users').where('username', 'branden').first()
      expect(newPeep).toMatchObject({ username: "branden" }) 
    })
    test('responds with error if incorrect request', () => {

    })
  })