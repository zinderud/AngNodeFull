import model from '../models';
import mainController from './mainController'
class roleController extends mainController{

constructor(){
  super();
}
  /**
   * Method createRole
   * @param {Object} request - request Object
   * @param {Object} response - request Object
   * @return {Object} response Object
   */
  static createRole(request, response) {
    model.Role.sync();
    model.Role.create(request.body)
      .then(newRole => response.status(201).send(newRole))
   //  .catch(error => response.status(400).send(error.errors) );
      .catch(error =>  super.sendError(response,error,400) );
         
  }

  /**
   * Method getRoles to obtain all roles
   * @param {Object} request - request Object
   * @param {Object} response - request Object
   * @return {Object} response Object
   */
  static getRoles(request, response) {
 
    model.Role.findAndCountAll({
     
      order: '"createdAt" ASC'
    })
      .then((roles) => {
     
        return response.status(200).send({ roles: roles.rows  });
      });
  }
}

export default roleController;
