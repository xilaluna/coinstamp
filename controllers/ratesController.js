const getRates = async (req, res) => {
  try {
    res.render("rates")
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getRates,
}
