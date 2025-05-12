const express = require("express");
const verifyToken = require('./middleware/auth');
const bodyParser = require("body-parser");
const db = require('./db'); 

const app = express();
app.use(bodyParser.json());

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
