const fastify = require("fastify")();
const customerRoutes = require("./routes/customer/customerRoutes");
const userRoutes = require("./routes/user/userRoutes");
const uploadRoutes = require("./routes/upload/uploadRoutes");
fastify.register(uploadRoutes.Multer.contentParser);
fastify.register(customerRoutes);
fastify.register(userRoutes);
fastify.register(uploadRoutes.routes);
const startServer = async () => {
  try {
    await fastify.listen(3000, (err, port) => {
      if (err) return err;
      console.log(`server is running on ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
