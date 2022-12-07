const db = require('../../data/dbConfig')

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  afterAll(async () => {
    await db.destroy()
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