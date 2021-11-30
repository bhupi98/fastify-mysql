const getAllUsers = (req, reply) => {
  try {
    reply.status(200).send("Users Related data");
  } catch (err) {
    reply.status(500).send(err);
  }
};

const getUserById = async (req, reply) => {
  let id = req.params.id;
  try {
    reply.status(200).send("getUserById");
  } catch (err) {
    reply.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
