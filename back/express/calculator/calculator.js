const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("started server on port " + port);
});

//Root get
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html", () => {
        console.log("Accessing root.")
    })
});
//Root post
app.post("/", (req,res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    console.log(num1,num2,result);
    res.send("Result: " + result);
});
//BMI root
app.get("/bmi", (req,res) => {
    res.sendFile(__dirname + "/bmi.html", () => {
        console.log("Accessing BMI Calculator.")
    })
});

app.post("/bmi", (req,res) => {
    let bmi = 0;
    calculateBMI(req.body.weight,req.body.height,(result) => {
        bmi = result;
        console.log(result);
        res.send("Your BMI is: " + result);
    });
})

function calculateBMI(weight,height,callback){
    let bmi = weight/(Math.pow(height,2));
    bmi = Math.round(bmi);
    return callback(bmi);
}