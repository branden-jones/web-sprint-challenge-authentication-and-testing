// Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})

jest.setTimeout(750)
const db = require('../data/dbConfig')
beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  
  beforeEach(async () => {
    await db.seed.run()
  })

  describe('server mounts', () => {
    test.todo('/api/server responds with listening')
  })

  describe('auth router registration', () => {
    test('requesting from /api/auth/register connects', () => {
        
    })
    test('requesting from /api/auth/register connects', () => {
        
    })
    test('responds with error if incorrect request', () => {

    })
  })