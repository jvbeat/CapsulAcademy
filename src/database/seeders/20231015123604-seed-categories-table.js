'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Entendendo seu projeto',
          position: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Site',
          position: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Plataforma de pagamento',
          position: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Trafego Pago',
          position: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Trafego Orgânico',
          position: 5,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
}
