const db = require('../../data/dbConfig')

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

  describe('register', () => {
    test('requesting from /api/auth/register connects', () => {
        
    })
    test('responds with error if incorrect request', () => {

    })
  })