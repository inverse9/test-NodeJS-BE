const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql) {
  const conn = await mysql.createConnection(config.db);

  conn.connect((error) => {
    if (error) {
      console.error("Error connecting to MySQL database:", error);
    } else {
      console.log("Connected to MySQL database!");
    }
  });

  const [results] = await conn.execute(sql);
  console.log(results);

  return results;
}

module.exports = { query };
