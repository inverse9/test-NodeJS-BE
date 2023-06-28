const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM user LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  return { data, meta };
}

async function create(user) {
  const result = await db.query(
    `INSERT INTO user
    (name, age) 
    VALUES
     ('${user.name}','${user.age}')`
  );

  let message = "Error insert";
  if (result.affectedRows) message = "success insert";
  return { message };
}

async function update(id, user) {
  const result = await db.query(
    `UPDATE user 
    SET name='${user.name}',age='${user.age}' 
    WHERE id=${id}`
  );
  let message = "Error update";
  if (result.affectedRows) message = "success update";
  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM user where id = ${id}`);
  let message = "Error delete";
  if (result.affectedRows) message = "success delete";
  return { message };
}

module.exports = { getAll, create, update, remove };
