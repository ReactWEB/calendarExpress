const express = require("express");
const path = require('path');
const app = express();
const calendar = require("./calendar-config");
const port = 3000;

app.set("view-engine", "ejs");
__dirname = path.resolve();
app.use(express.static((path.join(__dirname, 'views'))));


app.get("/",(req,res)=>{
    const year = req.query.year || 2023;
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    res.render("index.ejs",{calendar: calendar(year),months,year});
});

app.listen(port,()=>{
    console.log("app.js прослушивается портом:", port);
});