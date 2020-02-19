const mongoose = require('mongoose');

const ClasesSchema = mongoose.Schema({
    idmateria:      String ,
    laboratorio:    String ,
    dia:            String ,
    horainicio:     Date   ,
    horafinal:      Date   ,
    docente:        String ,
    materia:        String ,
    nivel:          String ,
    carrera:        String
    }, {
    timestamps: true
});

module.exports = mongoose.model('Clases', ClasesSchema);