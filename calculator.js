const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of calculation is " + result)
})

//////////////////////////////////////////

app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    
    var w = Number(req.body.w);
    var h = Number(req.body.h);
    var bmiResult = Math.round(w / Math.pow(h, 2));

    res.send("Your BMI is " + bmiResult)
})

app.listen(3000, function() {
    console.log("server is runing on port 3000.")
})