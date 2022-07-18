import joi from "joi";

export const newCredential = joi.object({
  title: joi.string().max(50).required(),
  url: joi.string().uri().required(),
  user: joi.string().required(),
  password: joi.string().required()
});

export const newNote = joi.object({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required()
});

export const newCard = joi.object({
  title: joi.string().max(50).required(),
  number: joi.number().unsafe().required(),
  holdername: joi.string().required(),
  cvv: joi.number().required(),
  expiration_date: joi.string().required(),
  password: joi.string().required(),
  virtual: joi.boolean().required()
});

export const newWifi = joi.object({
  title: joi.string().max(50).required(),
  name: joi.string().required(),
  password: joi.string().required()
});