const user = require("./user");
async function routes(festify) {
  festify.get("/user/users", user.getAllUsers);
  festify.get("/user/:id", user.getUserById);
}
module.exports = routes;
