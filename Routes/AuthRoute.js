const { Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/login", Login);
router.get("/logout", Logout);
router.post("/", userVerification);

module.exports = router;
