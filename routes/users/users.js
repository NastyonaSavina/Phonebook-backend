const express = require('express');

const router = new express.Router();

const {
    registrationController,
    loginController,
    logoutController,
    currentUserController,
} = require("../../controllers/users/index");

const { asyncWrapper } = require("../../helpers/index");
const {
  addUserValidation,
  loginUserValidation, authMiddleware,
} = require("../../middlewares/index");




router.post('/register', addUserValidation, asyncWrapper(registrationController));
router.post("/login", loginUserValidation, asyncWrapper(loginController));
router.post('/logout', authMiddleware, asyncWrapper(logoutController));
router.get('/current', authMiddleware, asyncWrapper(currentUserController));




module.exports = {usersRouter: router};
