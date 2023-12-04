import { validationResult } from "express-validator";
import { body } from 'express-validator';

export const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    next();
};

export const bodyRegisterValidator = [
    body('firstName').trim().exists({ checkFalsy: true })
    .withMessage("User name is required")
    .isString()
    .withMessage("User name should be a valid string"),
    body('lastName').trim().exists({ checkFalsy: true })
    .withMessage("User last name is required")
    .isString()
    .withMessage("User last name should be a valid string"),
    body('email', "Incorrect email format").trim().isEmail().normalizeEmail(),
    body('password').trim().isStrongPassword().withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number"),
    validationResultExpress
];

export const bodyLoginValidator = [
    body('email', "Incorrect email format").trim().isEmail().normalizeEmail(),
    body('password').trim().isStrongPassword().withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number"),
    validationResultExpress
];

export const bodyDeleteUserValidator = [
    body('email', "Incorrect email format").trim().isEmail().normalizeEmail(),
    validationResultExpress
]