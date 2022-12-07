exports.seed = async function (knex) {
    await knex('users')
        .truncate()
        .insert([
      {
        username: 'ted',
        password: '$2b$04$XC5eBWVZYNpmxsXYfOhjVO1DAANEZZD3L7r3EA6oRr/BjiACzgGDe', // password "1234"
      },
      {
        username: 'jed',
        password: '$2b$04$QRSxLVfiud0yonq9RVv2dORsXt1jGt0QYWLQV.qGLSrJM/7QuKtmC', // password "1111"
      },
    ])
  }