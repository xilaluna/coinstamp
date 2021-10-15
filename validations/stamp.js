const Joi = require("joi")

const toAddressValidation = (data) => {
  const schema = Joi.object({
    toName: Joi.string().required(),
    toStreet1: Joi.string().required(),
    toStreet2: Joi.string().required(),
    toCity: Joi.string().required(),
    toState: Joi.string().required(),
    toZip: Joi.string().required(),
    toPhone: Joi.string(),
  })
  return schema.validate(data)
}

const fromAddressValidation = (data) => {
  const schema = Joi.object({
    fromName: Joi.string().required(),
    fromStreet1: Joi.string().required(),
    fromStreet2: Joi.string().required(),
    fromCity: Joi.string().required(),
    fromState: Joi.string().required(),
    fromZip: Joi.string().required(),
    fromPhone: Joi.string(),
  })
  return schema.validate(data)
}

const parcelValidation = (data) => {
  const schema = Joi.object({
    length: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),
    predefined_package: Joi.string(),
    pounds: Joi.string().required(),
    ounces: Joi.string().required(),
  })
  return schema.validate(data)
}

module.exports = {
  toAddressValidation,
  fromAddressValidation,
  parcelValidation,
}
