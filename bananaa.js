var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

//var serverLink = "https://api.funtranslations.com/translate/minion.json"
var serverLink = "	https://api.funtranslations.com/translate/dothraki.json"
function getTranslationLink(input){
    return serverLink +"?" +"text=" +input
}
function errorHandler(error)
{
    console.log("Some Error has been Occoured!, Wait for SomeTime..,error")
    alert("We will be back soon, Sorry for INconvenience..")
}
function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationLink(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        txtOutput.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)

