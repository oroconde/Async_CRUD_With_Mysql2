module.exports = {
  validation: async (req, res, next) =>{
    const { token } = req. headers
    if (token & token == '123') {
        next
    } else {
      res.status(200).json({msg: 'acceso denegado'})
    }
  }
}