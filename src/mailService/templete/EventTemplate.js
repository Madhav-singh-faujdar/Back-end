const eventTemplete = ({
    name,
    email,
    number,
    ticket
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
                    <li><strong>Name:</strong> ${name}</li><br>
                    <li><strong>Email:</strong> ${email}</li><br>
                    <li><strong>Number:</strong> ${number}</li><br>
                    <li><strong>Number of Tickets:</strong> ${ticket}</li><br>
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