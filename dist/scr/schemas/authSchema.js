import joi from "joi";
export var acessControlSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
