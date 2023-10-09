import { Sequelize } from "sequelize"

export const sequelize = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'capsulacademy_development',
    username: 'root',
    password: 'root',
    define: {
        underscored: true
    }
})