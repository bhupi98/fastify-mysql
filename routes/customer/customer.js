const { excuteQuery } = require("../../config/db");

const getAllCustomers = async (req, reply) => {
  try {
    let customerData = await excuteQuery("select * from customer", []);
    reply.status(200).send(customerData);
  } catch (err) {
    reply.status(500).send(err);
  }
};

const getCustomerById = async (req, reply) => {
  let id = req.params.id;
  try {
    let customerData = await excuteQuery(
      "select * from customer where customer_id=?",
      [id]
    );
    reply.status(200).send(customerData);
  } catch (err) {
    reply.status(500).send(err);
  }
};

const deleteCustomerById = async (req, reply) => {
  let id = req.params.id;
  try {
    let customerData = await excuteQuery(
      "delete from customer where customer_id=?",
      [id]
    );
    reply.status(200).send(customerData);
  } catch (err) {
    reply.status(500).send(err);
  }
};

const addCustomer = async (req, reply) => {
  try {
    const {
      customer_id,
      customer_name,
      customer_email,
      customer_age,
      customer_address,
      customer_phoneno,
    } = req.body;
    let customerData = await excuteQuery(
      "insert into customer(customer_id,customer_name,customer_email,customer_age,customer_address,customer_phoneno) values(?,?,?,?,?,?)",
      [
        customer_id,
        customer_name,
        customer_email,
        customer_age,
        customer_address,
        customer_phoneno,
      ]
    );
    reply.status(201).send(customerData);
  } catch (err) {
    reply.status(400).send(err);
  }
};

const updateCustomer = async (req, reply) => {
  let id = req.params.id;
  try {
    const {
      customer_name,
      customer_email,
      customer_age,
      customer_address,
      customer_phoneno,
    } = req.body;
    let customerData = await excuteQuery(
      `update customer set customer_name=?,customer_email=?,customer_age=?,customer_address=?,customer_phoneno=? where customer_id=${id}`,
      [
        customer_name,
        customer_email,
        customer_age,
        customer_address,
        customer_phoneno,
      ]
    );
    reply.status(200).send(customerData);
  } catch (err) {
    reply.status(400).send(err);
  }
};

module.exports = {
  getAllCustomers: getAllCustomers,
  getCustomerById: getCustomerById,
  deleteCustomerById: deleteCustomerById,
  addCustomer: addCustomer,
  updateCustomer: updateCustomer,
};
