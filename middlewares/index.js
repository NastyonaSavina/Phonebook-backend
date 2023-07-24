const { addContactValidation } = require("./validation/addContactValidation");
const { updateStatusContactValidation } = require("./validation/updateStatusContact");
const { addUserValidation } = require("./validation/addUserValidation");
const {loginUserValidation} = require("./validation/loginUserValidation");
const { authMiddleware } = require("./autMiddleware/authMiddleware");
const { updateContactValidation } = require("./validation/updateContactValidation");



module.exports = {
  addContactValidation,
  updateStatusContactValidation,
  addUserValidation,
  loginUserValidation,
  authMiddleware,
  updateContactValidation,
};