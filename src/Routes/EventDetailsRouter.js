const router = require('express').Router();
const event = require("../Modal/EventDetails");
const validateDetails = require("../Validater/EventDetails");
const EventForm = require("../Controller/EventForm")

router.post('/postEventDetails', validateDetails , EventForm.addEvent)



module.exports = router;
