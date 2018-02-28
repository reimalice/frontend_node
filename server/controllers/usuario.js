const Usuario = require('../models').Usuario;
const Empleado = require('../models').Empleado;
const Contrato = require('../models').Contrato;
const Cargo = require('../models').Cargo;

module.exports = {

    create(req, res) {
        return Usuario
            .create({
                username: req.body.username,
            })
            .then(usuario => res.status(201).send(usuario))
            .catch(error => res.status(400).send(error));
    },
    
    list(req, res) {
        return Usuario
          .findAll({
            include: [{
              model: Empleado,
              as: 'empleado',
              include: [{
                model: Contrato,
                as: 'contrato',
                include: [{
                    model: Cargo,
                    as: 'cargo',
                  }],
              }],
            }],
          })
          .then(usuarios => res.status(200).send(usuarios))
          .catch(error => res.status(400).send(error));
    },


    retrieve(req, res) {
        return Usuario
          .findById(req.params.usuarioId, {
            include: [{
              model: Empleado,
              as: 'empleado',
            }],


          })
          .then(empleado => {
            if (!empleado) {
              return res.status(404).send({ 
              });
            }
            return res.status(200).send(empleado);
          })
          .catch(error => res.status(400).send(error));
      } 
};