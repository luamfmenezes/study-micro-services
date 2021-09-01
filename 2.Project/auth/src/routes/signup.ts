import {Router, Request, Response} from 'express'
import { body, validationResult } from 'express-validator'

const router = Router();

const signUpValidation = [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min:4,max:20})
        .withMessage('Password must be valid'),
]

router.post('/api/users/signup',signUpValidation, (req:Request,res:Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;


    res.send('Creating a user...') 
});

export { router as signUpRoute };