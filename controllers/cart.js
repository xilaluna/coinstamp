const getCart = async (req, res) => {
  try {
    res.render("cart", { stamps: req.session.stamps })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCart,
}
