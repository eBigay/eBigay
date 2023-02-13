const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/itemsController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .get(itemsController.getAllItems)
  .post(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
    itemsController.createNewItem
  )
  .put(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
    itemsController.updateItem
  )
  .delete(verifyJWT, verifyRoles(ROLES_LIST.Admin), itemsController.deleteItem);

router
  .route("/createdBy")
  .get(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
    itemsController.getUserItem
  );

module.exports = router;
