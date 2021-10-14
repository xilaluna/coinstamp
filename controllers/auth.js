const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../validations/auth")

const postRegister = async (req, res) => {
  try {
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send("Email already exists")

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
      email: req.body.email,
      password: hashedPassword,
    })

    await user.save()

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "60 days",
    })
    res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
    res.redirect("/")
  } catch (err) {
    console.log(err.message)
    res.status(400).send(err)
  }
}

const postLogin = async (req, res) => {
  try {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Invalid email or password")

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("Invalid email or password")

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "60 days",
    })
    res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
    res.redirect("/")
  } catch (err) {
    console.log(err.message)
    res.status(400).send(err)
  }
}

const getLogout = async (req, res) => {
  res.clearCookie("nToken")
  res.redirect("/")
}

module.exports = {
  postRegister,
  postLogin,
  getLogout,
}
