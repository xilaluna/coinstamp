const getHome = async (req, res) => {
  try {
    if (!req.session.stamps) {
      req.session.stamps = []
    }

    req.session.save()
    res.render("home", { stamps: req.session.stamps })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getHome,
}
