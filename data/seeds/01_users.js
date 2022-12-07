exports.seed = async function (knex) {
    await knex('users')
        .truncate()
        .insert([
      {
        username: 'branden',
        password: '1234', // password "1234"
      },
      {
        username: 'anna',
        password: '1111', // password "1234"
      },
    ])
  }