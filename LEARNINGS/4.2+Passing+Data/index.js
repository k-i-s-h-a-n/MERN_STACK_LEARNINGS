import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const firstName=req.body["fName"]
  const lastName=req.body["lName"]
  console.log(firstName)
  console.log(lastName)
  let length = firstName.length + lastName.length;
  console.log(length);
  const data = {
    length:length,
  }
 
  res.render("index.ejs", data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
