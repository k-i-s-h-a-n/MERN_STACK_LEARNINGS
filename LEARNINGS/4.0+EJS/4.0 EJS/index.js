import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    // const today = new Date();
    // new Date("June 24, 2023 11:13:00");
    //   weekday:
    // new Date("June 20, 2023 11:13:00");
    let type = "a weekday";
    let adv = "it's time to work hard";

    const day = Date("June 24, 2023 11:13:00");
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
      }
    
      res.render("solution.ejs", {
        dayType: type,
        advice: adv,
      });
   res.render('index.ejs',{dayType:"a week day",advice:"dekhlo bhai"});
  
  });




app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  