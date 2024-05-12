const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const db = require('./config/databese.js');
const Auth = require('./routes/auth.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/', Auth);

app.get('/', (req, res) => {
    res.send("Api working");
})
app.listen(2000 || process.env.PORT, () => {
    console.log("Listen ", process.env.PORT);
    db();
})