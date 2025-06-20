const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captionController = require("../controllers/caption.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("capacity must be a number"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("vehicleType must be at least 3 characters long"),
  ],

  captionController.registerCaption
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters long"),
  ],
  captionController.loginCaption
);

router.get(
  "/profile",
  authMiddleware.authCaption,
  captionController.getCaptionProfile
);

router.get(
  "/logout",
  authMiddleware.authCaption,
  captionController.logoutCaption
);

module.exports = router;
