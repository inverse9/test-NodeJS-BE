const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql) {
  const conn = await mysql.createConnection(config.db);
  const [results] = await conn.execute(sql);

  return results;
}

async function createUsersTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
      id int AUTO_INCREMENT PRIMARY KEY,
      name longtext DEFAULT NULL,
      age smallint(6) DEFAULT NULL
    );
  `;

  try {
    const result = await query(createTableSQL);
    console.log("Users table created or already exists.");
  } catch (error) {
    console.error("Error creating users table:", error);
  }
}

module.exports = { query, createUsersTable };
