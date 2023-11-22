const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { REACT_APP_URL } = require("./configration/Configration");

const EventDetailsRouter = require('./Routes/EventDetailsRouter');


const app = express();

app .use(morgan('dev'));
app.use(helmet());


const corsOptions = {
    origin:REACT_APP_URL,
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    CredentialS: true,
    optionsSuccessStatus:204,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req ,res)=>{
req.json({
    massage: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
})
})
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1/form', EventDetailsRouter);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
  
  
  
  
  
  module.exports = app;
  