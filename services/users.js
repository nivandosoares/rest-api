const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nome, empresa FROM user LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// POST METHOD

async function create(user) {
  const result = await db.query(
    `INSERT INTO user 
      (nome, empresa) 
      VALUES 
      ("${user.nome}", "${user.empresa}")`
  );

  let message = "Error in creating user";

  if (result.affectedRows) {
    message = "user created successfully";
  }

  return { message };
}

//PUT METHOD
async function update(id, user) {
  const result = await db.query(
    `UPDATE user 
      SET nome="${user.nome}", empresa=${user.empresa} 
      WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.affectedRows) {
    message = "user updated successfully";
  }

  return { message };
}

// DELETE METHOD
async function remove(id) {
  const result = await db.query(`DELETE FROM user WHERE id=${id}`);

  let message = "Error in deleting user";

  if (result.affectedRows) {
    message = "user deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
