const {body, validationResult} = require('express-validator')

// Building Sign Up validation middleware
exports.RegisterValidation = [
    body('email', 'the email field sould not be empty').notEmpty(),
    body('email', 'should be a valid email').isEmail(),
    body('password', 'the password field should not be empty').notEmpty(),
    body('password', 'should be at least 6 caracters').isLength({min:6}),
    body('role', 'the role field should not be empty').notEmpty(),
]

exports.Validation=(req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next()
}