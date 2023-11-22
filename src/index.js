const app = require('./App');
const mongoose = require('mongoose');
const { PORT, MONGODB_URL } = require('./configration/Configration');
mongoose.set("strictQuery", true);




dburl = MONGODB_URL;
mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

const db = mongoose.connection;
const port = PORT || 4000;

db.on("error", console.error.bind(console, "mongodb connection error found: "));
db.once("open", () => {
  console.log(`Database is running.`);
  app.listen(port, () => {
    
    console.log(`server is running on ${port}`);
  });
});

