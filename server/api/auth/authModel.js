const db = require(_dbConfig);
const rolesModel = require("../public/roles/roles-model");

module.exports = {
  addUser,
  findByEmail,
  findById,
  loginUser,
  removeUser,
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

function findById(id) {
  return db(table).select("*").where({ id }).first();
}

function findByEmail(email) {
  return db(table + " as u")
    .select("u.id", "u.email", "u.password")
    .where({ email })
    .first();
}

async function loginUser(user) {
  //Get the proposed user
  const getUserRoles = await rolesModel.findAllRolesById(user.id);

  return {
    ...user,
    user_roles: [...getUserRoles],
    message: "Welcome Back",
  };
}

function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}

function removeUser(id) {
  return db(table).where({ id }).del();
}
