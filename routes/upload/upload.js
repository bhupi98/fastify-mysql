const Multer = require("fastify-multer");
const { excuteQuery } = require("../../config/db");
process.env.ROOT_PATH = __dirname;
const ROOT_PATH = process.env.ROOT_PATH;
var storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ROOT_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = Multer({
  storage: storage,
});

// let fieldsUpload = upload.single("file");
let fieldsUpload = upload.array("file");
const uploadFile = async (req, res) => {
  // console.log(req.file);
  let filename = JSON.stringify(req.files);
  console.log(filename);

  let file = await excuteQuery(
    "insert into customer_images(customer_image)values(?)",
    filename
  );
  file = await excuteQuery(
    `select * from customer_images where image_id=${file.insertId}`
  );
  res.status(200).send(file);
};

module.exports = {
  uploadFile,
  fieldsUpload,
  Multer,
};
