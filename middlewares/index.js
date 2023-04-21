const { addContactValidation } = require("./validation/addContactValidation");
const { updateStatusContactValidation } = require("./validation/updateStatusContact");
const { addUserValidation } = require("./validation/addUserValidation");
const { authMiddleware } = require("./autMiddleware/authMiddleware");
const { updateContactValidation } = require("./validation/updateContactValidation");
const { uploadAvatarMiddleware } = require("./uploadMiddleware/uploadAvatarMiddleware");



module.exports={
    addContactValidation,
    updateStatusContactValidation,
    addUserValidation,
    authMiddleware,
    updateContactValidation,
    uploadAvatarMiddleware
}