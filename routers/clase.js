const express = require("express");
const ClaseController = require("../controllers/clase");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-clase", [md_auth.ensureAuth], ClaseController.addClase);
api.get("/get-clase", ClaseController.getClase());
api.put("/update-clase/:id", [md_auth.ensureAuth], ClaseController.updateClase());
api.delete("/delete-clase/:id", [md_auth.ensureAuth], ClaseController.deleteClase);
module.exports = api;
