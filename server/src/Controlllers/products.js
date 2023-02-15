const products = require("../models/products");

const dbinfo = async (req, res) => {
  try {
    const db = await products.findAll();
    console.log(db, "aqui");
    res.json(db);
  } catch (error) {
    res.send(error);
  }
};
const createproduct = async (req, res) => {
  try {
    let { name, quantity, description, img, price } = req.body;
    console.log(req.body);
    await products.create(name, quantity, description, img, price);
    res.send("creado correcto ");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

module.exports = { dbinfo, createproduct };
