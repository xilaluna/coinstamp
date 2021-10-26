const getHome = async (req, res) => {
  try {
    if (!req.session.stamps) {
      req.session.stamps = []
    }
    res.render("home")
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getHome,
}
