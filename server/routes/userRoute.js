import express from 'express';
import userController from '../controllers/userController';
// import documentController from '../controllers/documentController';
import auth from '../middleware/auth';
// import utils    from '../middlewares/utils';
import cors  from "cors";
const user = express.Router();

user.route('/api/user')
.get(auth.verifyToken, auth.adminAccess, userController.getAllUsers)
.post(cors(),userController.createUser);

user.route('/api/user/profile')
.get(auth.verifyToken, userController.getProfile);

user.route('/api/user/admin')
.get(auth.verifyToken, auth.adminAccess, userController.getAllAdmin);

user.route('/api/user/role')
.get(auth.verifyToken, userController.getAllRole);

user.route('/api/user/:id')
.get(auth.verifyToken, userController.getUser)
.put(auth.verifyToken, userController.updateUser)
.delete(auth.verifyToken, userController.deleteUser);


user.route('/api/user/login')
.post(cors(), userController.login);

user.route('/api/search/user')
.get(auth.verifyToken, userController.searchUsers);

user.route('/api/user/logout')
.post(cors(),auth.verifyToken, userController.logout);


//open api
user.route('/api/users/open/')
.get(userController.getAllAdmin)


module.exports = () => user;
