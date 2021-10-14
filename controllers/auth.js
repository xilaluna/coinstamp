const User = require("../models/User")
const { registerValidation, loginValidation } = require("../validations/auth")

const postRegister = async (req, res) => {
  const { error } = registerValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) {
    return res.status(400).send("Email already exists")
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  })

  try {
    const savedUser = await user.save()
  } catch (err) {
    console.log(err.message)
    res.status(400).send(err)
  }
}

const postLogin = async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send("Email is not found")

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send("Invalid password")
}

module.exports = {
  postRegister,
  postLogin,
}
