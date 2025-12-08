const User = require("../model/user.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find();

    if (user.length === 0) {
      return res.status(404).send("user not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server errors");
  }
});

module.exports = router;
