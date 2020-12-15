let btnTranslate = document.querySelector("button");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function constructUrl(inputText) {
  return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert(
    "Oops!! Looks like something's wrong with server. Please try again after some time"
  );
}

function clickHandler() {
  var inputText = textInput.value;

  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

