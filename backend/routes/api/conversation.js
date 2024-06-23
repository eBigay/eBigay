const express = require("express");
const router = express.Router();
const ROLES_LIST = require("../../config/roles_list");
const conversationsController = require("../../controllers/conversationsController");
const verifyRoles = require("../../middleware/verifyRoles");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .post(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
    conversationsController.addNewConversation
  );

router.route("/:userId").get(
  // verifyJWT,
  // verifyRoles(ROLES_LIST.User),
  conversationsController.getUserConversation
);

module.exports = router;
