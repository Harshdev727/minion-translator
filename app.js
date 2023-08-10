var btnTranslate = document.querySelector("#btn-translate");
var inputBox = document.querySelector("textarea");
var outputBox = document.querySelector("#outputBox");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getCompleteURL(input){
    return serverURL + "?" + "text=" + input; 
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! please try again after some time");
}

function clickHandler(){
    var userInput = inputBox.value; //taking input from user

    // calling server for processing
    fetch(getCompleteURL(userInput))
    .then(response => response.json())
    .then(json => {
        var getTranslatedText = json.contents.translated;
        outputBox.innerText = getTranslatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)

