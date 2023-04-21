const mongoose = require("mongoose");
require('dotenv').config();

const app = require('./app');
  
const { MONGO_URL, PORT = 3000 } = process.env;

// mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL,{
      dbName: 'db-contacts',
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

