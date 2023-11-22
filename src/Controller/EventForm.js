const sendMail = require("../mailService/MailByNodeMailer");
const EventTemplete = require("../mailService/templete/EventTemplate");
const EVENT_DETAILS = require("../Modal/EventDetails");


exports.addEvent = async (req, res, next) => {
    try {
  
      const {eventName, eventDate, eventLocation, countOfShares, eventImage,  eventLikeCount, 
        eventHighlightes, eventDetails, category, tickets, Payment, mapLocation, expireEventDate} = req.body
  
      const newEvent = new EVENT_DETAILS({eventName, eventDate, eventLocation, countOfShares, eventImage,  eventLikeCount, 
        eventHighlightes, eventDetails, category, tickets, Payment, mapLocation, expireEventDate})
      let savedForm = await newEvent.save()
  
      if (!savedForm) {
        throw new Error('Something went wrong!')
      }
  
      let responseMail = await sendMail(savedForm, EventTemplete)
  
      if (responseMail.error) {
        throw new Error(responseMail.message)
      }
  
      res.status(201).json({ error: false, message: "Form submitted. ", data: savedForm })
    }
  
    catch (error) {
      next(error)
    }}
  