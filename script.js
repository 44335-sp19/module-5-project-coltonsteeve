/* Module 5 Project Script File */
var jsCat = [{ }, {question: "What is the file extension for JavaScript files? (.something)", answer: ".js"}, {question: "What do you have to put before the name to declare a variable?", answer:"var"}, {question: "What year was JavaScript developed?", answer: "1995"} ];  
var jqCat = [{ }, {question: "jQuery can be written in the same file as JavaScript code: True or False?", answer: "True"}, {question: "What symbol do you have to put at the beginning of a jQuery statement? (Put the symbol as the answer)", answer:"$"}, {question: "Can you write jQuery alongside a string if you use backticks instead of quotation marks? (Yes or No)" , answer: "Yes"} ];
var bsCat = [{ }, {question: "Bootstrap allows you to use pre-made classes for elements: True or False?", answer: "True"}, {question: "Do you have to download Bootstrap to use it? (Yes or No)", answer:"No"}, {question: "What year was Bootstrap developed?", answer: "2011"} ];

//var total = document.getElementById("total");

var total = 0;

function showQuestion (category, amount) { 
    var index = amount/100;
    var score = document.getElementById("score");
    var buttonJS = document.getElementsByClassName("js");
    var buttonJQ = document.getElementsByClassName("jq");
    var buttonBS = document.getElementsByClassName("bs");

    if (category == 'jsCat') {
        var inputJS = prompt(jsCat[index].question);
        if (inputJS == jsCat[index].answer) {
            total += amount;
            buttonJS[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonJS[index].disabled = true;
        }
    }
    else if (category == 'jqCat') {
        var inputJQ = prompt(jqCat[index].question);
        if (inputJQ == jqCat[index].answer) {
            total += amount;
            buttonJQ[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonJQ[index].disabled = true;
        }
    }
    else if (category == 'bsCat') {
        var inputBS = prompt(bsCat[index].question);
        if (inputBS == bsCat[index].answer) {
            total += amount;
            buttonBS[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonBS[index].disabled = true;
        }
    }
    score.innerHTML = "Score: $" + total;
 }