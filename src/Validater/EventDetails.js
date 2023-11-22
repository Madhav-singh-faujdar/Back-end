const { body, validationResult } = require("express-validator");


const validateDetails = [
    body("eventName")
    .isString()
    .withMessage("Please provide a valid name!")
    .notEmpty()
    .withMessage("please fill the name field"),


    body("eventDate")
    .isDate()
    .withMessage("please provide a valid date")
    .notEmpty()
    .withMessage("please fill the date field"),


    body("eventLocation")
    .isString()
    .withMessage("please provide the location")
    .notEmpty()
    .withMessage("please fill the field"),


    body("eventImage")
    .isString()
    .withMessage("please uplode the image")
    .notEmpty()
    .withMessage("please fill the feild"),

    
    body("eventLikeCount")
    .isNumeric(),


    body("eventHighlightes")
    .isString(),

    
    body("eventDetails")
    .isString()
    .notEmpty()
    .withMessage("please fill the feild"),


    body("category")
    .isString()
    .withMessage("please provide the category")
    .notEmpty()
    .withMessage("please fill the feild"),


    body("tickets")
    .isNumeric()
    .withMessage("please provide the no of tickets")
    .notEmpty()
    .withMessage("please fill the feild"),

    
    body("Payment")
    .isNumeric()
    .withMessage("please enter the amount")
    .notEmpty()
    .withMessage("please fill the feild"),


    body("mapLocation")
    .isString()
    .withMessage("please enter the correct location")
    .notEmpty()
    .withMessage("please fill the feild"),


    body("expireEventDate")
    .isString()
    .withMessage("please enter the date")
    .notEmpty()
    .withMessage("please fill the feild"),


    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: true,
                message: errors.array()[0].msg,
                data: errors.array()
            });
        }
        next();}

]
module.exports = validateDetails;
