const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    eventName: { type: String, require: true },
    eventDate: {type: Date, require: true},
    eventLocation: {type: String, require: true},
    countOfShares: { type: Number},
    eventImage:{ type: String , require: true},  
    eventLikeCount:{ type: Number , require: true},
    eventHighlightes:{ type: String , require: true},
    eventDetails:{ type: String , require: true},
    category:{ type: String , require: true},
    tickets:{ type: Number , require: true},
    Payment:{ type: Number , require: true},
    mapLocation:{ type: String , require: true},
    expireEventDate:{ type: Date , require: true},
      
});

module.exports = mongoose.model("EventDetails", postSchema);
