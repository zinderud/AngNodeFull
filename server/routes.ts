import * as express from 'express';
import roleController from './controllers/roleController';
import userController from './controllers/userController';
import auth from './middleware/auth';
import * as cors from 'cors';
export default function setRoutes(app) {

    app.route('/')
        .get((req, res) => res
            .status(200)
            .send({ message: 'Welcome Back Mr Anderson I miss you...!' }));
    // role
    app.route('/api/role')
        .all(auth.verifyToken, auth.adminAccess)
        .get(roleController.getRoles)
        .post(cors(), roleController.createRole);

    // user
    app.route('/api/user')
        .get(auth.verifyToken, auth.adminAccess, userController.getAllUsers)
        .post(cors(), userController.createUser);

    app.route('/api/user/profile')
        .get(auth.verifyToken, userController.getProfile);

    app.route('/api/user/admin')
        .get(auth.verifyToken, auth.adminAccess, userController.getAllAdmin);

    app.route('/api/user/role')
        .get(auth.verifyToken, userController.getAllRole);

    app.route('/api/user/:id')
        .get(auth.verifyToken, userController.getUser)
        .put(auth.verifyToken, userController.updateUser)
        .delete(auth.verifyToken, userController.deleteUser);


    app.route('/api/user/login')
        .post(cors(), userController.login);

    app.route('/api/search/user')
        .get(auth.verifyToken, userController.searchUsers);

    app.route('/api/user/logout')
        .post(cors(), auth.verifyToken, userController.logout);


    // open api
    app.route('/api/users/open/')
        .get(userController.getAllAdmin)


    app.route('/api/role/open')
        .get(roleController.getRoles)
        .post(cors(), roleController.createRole);

}