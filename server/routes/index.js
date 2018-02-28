const usuariosController = require('../controllers').usuarios;

module.exports = (app) => {

/**
 * @api {GET} / Permite obtener el estado de la aplicación
 * 
 * @apiName Obtener el estado del sericio
 * @apiGroup Estado
 * @apiVersion 1.0.0
 * 
 * @apiParamExample {text} Obtener el estado del servicio (CURL)
 * curl -X GET \
 * 
 *  'http://127.0.0.1.8000'
 * 
 * 
 * @apiSuccess (Respuesta Exitosa) {String} respuesta de servicio
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Respuesta existosa
 * 
 * HTTP/1.1 200 OK
 * 
 *  ***Aplicación NODEJS iniciada en EXPRESSJS\n
 * 
 */

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Usuarios API!',
  }));




  app.post('/api/usuarios', usuariosController.create);

  app.get('/api/usuarios', usuariosController.list);

  app.get('/api/usuarios/:usuarioId', usuariosController.retrieve);


};