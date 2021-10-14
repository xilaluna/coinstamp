const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.nToken

    if (token === "undefined" || token === null) {
      req.user = null
    } else {
      const verified = jwt.decode(token, { complete: true }) || {}
      req.user = verified.payload
    }
    next()
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = auth
