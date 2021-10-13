const User = require("../models/User")

const postRegister = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const savedUser = await user.save()
  } catch (err) {
    console.log(err.message)
    res.status(400).send(err)
  }
}

const postLogin = async (req, res) => {}

module.exports = {
  postRegister,
  postLogin,
}
