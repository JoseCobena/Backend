const Clases = require("../models/clase");
//crear clases
function addClase(req, res) {
  const clase = new Clases(body);
  const {laboratorio, dia, horainicio, horafinal,docente,materia, nivel, carrera} = req.body;
  clase.laboratorio=laboratorio;
  clase.dia=dia;
  clase.horainicio=horainicio;
  clase.horafinal=horafinal;
  clase.docente=docente;
  clase.materia=materia;
  clase.nivel=nivel;
  clase.carrera=carrera;
    //guardar clases
  clase.save((err, claseStored) => {
    if (err) {
      res
        .status(400)
        .send({ code: 400, message: "La clase que estas creando ya existe." });
    } else {
      if (!claseStored) {
        res
          .status(400)
          .send({ code: 400, message: "No se ha podido crear la clase." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Clase creada correctamente." });
      }
    }
  });
}
//obtener clases
function getClase(req, res) {
  Clases.find().then(clase => {
    if (!clase) {
      res.status(404).send({ message: "No se ha encontrado ninguna clase." });
    } else {
      res.status(200).send({ clase });
    }
  });
}
//actualizar clase
function updateClase(req, res) {
  const claseData = req.body;
  const { id } = req.params;

  Clases.findByIdAndUpdate(id, claseData, (err, postUpdate) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!postUpdate) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ninguna clase." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Clase actualizada correctamente." });
      }
    }
  });
}
//eliminar usuario
function deleteClase(req, res) {
  const { id } = req.params;

  Clases.findByIdAndRemove(id, (err, claseDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!claseDeleted) {
        res.status(404).send({ message: "Clase no encontrada." });
      } else {
        res
          .status(200)
          .send({ message: "La clase ha sido eliminado correctamente." });
      }
    }
  });
}

module.exports = {
    addClase,
    getClase,
    updateClase,
    deleteClase
};