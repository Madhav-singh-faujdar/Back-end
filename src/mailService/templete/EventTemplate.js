const eventTemplete = ({
    eventName,
      eventDate,
      eventLocation,
      countOfShares,
      eventImage,
      eventLikeCount,
      eventHighlightes,
      eventDetails,
      category,
      tickets,
      Payment,
      mapLocation,
      expireEventDate,
      supportEmail,
      supportNumber,
      time,
      organizerName,
      customer,
      saleTicket,
}) => {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Event Request Form Submission</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
        
                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                h2 {
                    color: #333;
                }
        
                p {
                    color: #555;
                }
                .logo-container {
                    /* text-align: center; */
                    background-color: rgb(168, 168, 238);
                    padding: 30px;
                }
        
        
        
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo-container">
                    <img src="https://futuresystechnologies.com/img/logo1.png" alt="Logo">
                </div>
                <div class="container-i" >
        
                    <h2>Event Request Form Submission</h2>
                    <p>Hello Manager,</p>
                    <p>You have received a new event request form submission. Below are the details:</p>
            <div >
        
                <ul ><br>
                    <li><strong>Name:</strong> ${eventName}</li><br>
                    <li><strong>Email:</strong> ${eventDate}</li><br>
                    <li><strong>Number:</strong> ${eventLocation}</li><br>
                    <li><strong>Image of Event:</strong> ${eventImage}</li><br>
                    <li><strong>Events Highlightes:</strong> ${eventHighlightes}</li><br>
                    <li><strong>Count of Likes:</strong> ${eventLikeCount}</li><br>
                    <li><strong>Detail of Events:</strong> ${eventDetails}</li><br>
                    <li><strong>Category:</strong> ${category}</li><br>
                    <li><strong>Tickets:</strong> ${tickets}</li><br>
                    <li><strong>Payment:</strong> ${Payment}</li><br>
                    <li><strong>Map Location:</strong> ${mapLocation}</li><br>
                    <li><strong>Support Email:</strong> ${supportEmail}</li><br>
                    <li><strong>Support Number:</strong> ${supportNumber}</li><br>
                    <li><strong>Time:</strong> ${time}</li><br>
                    <li><strong>Name of Organizer:</strong> ${organizerName}</li><br>
                    <li><strong>Customer:</strong> ${customer}</li><br>
                    <li><strong>Expire Event Date :</strong> ${expireEventDate}</li><br>
                    <li><strong>Sale tickets:</strong> ${saleTicket}</li><br>
                    <li><strong>Count of Shares:</strong> ${countOfShares}</li><br>
                </ul>
            </div>
            
                    <p>Please review the details and take necessary action.</p>
            <br>
                  
                        <p class="footer">Thank you,<br>&nbsp;  Xplo</p>
            
        
                </div>    
        
            
            </div>
        
            
        
        </body>
        </html>
        
        `
    )
}
module.exports = eventTemplete