const customer = require("./customer");
async function routes(fastify) {
  fastify.get("/customer/customers", customer.getAllCustomers);
  fastify.get("/customer/customer/:id", customer.getCustomerById);
  fastify.delete("/customer/deleteCustomer/:id", customer.deleteCustomerById);
  fastify.post("/customer/addCustomer", customer.addCustomer);
  fastify.put("/customer/updateCustomer/:id", customer.updateCustomer);
}

module.exports = routes;
