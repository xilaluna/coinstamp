const getOrder = async (req, res) => {
  try {
    res.render("order")
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getOrder,
}
