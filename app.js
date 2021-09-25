require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ShortURL = require("./models/URLShortenerModel");
const URLShortenerRoute = require("./routes/URLShortenerRoute");

const app = express();
app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//DB connection
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = process.env.PORT || 80;
    app.listen(port, () => {
      console.log(`server started at port`, port);
    });
  })
  .catch((err) => {
    console.log(err);
  });


//rendering index.pug
app.get("/", async (req, res) => {
  const shortUrls = await ShortURL.find();
  res.status(200).render("index", { shortUrls });
});

app.use(URLShortenerRoute);
