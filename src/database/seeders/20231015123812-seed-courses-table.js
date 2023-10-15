'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query(
      'SELECT id FROM categories;'
    )

    await queryInterface.bulkInsert('courses', [
      {
        name: 'Assunto 1',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 2',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 3',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 4',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 5',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 6',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 7',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 8',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 9',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 10',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 11',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 12',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 12',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[4].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Assunto 13',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[4].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
