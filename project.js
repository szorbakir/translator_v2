const sourceTextAreaElement = document.getElementById("sourceTextAreaElement");
const translateButton = document.getElementById("translateButton");
const targetTextAreaElement = document.getElementById("targetTextAreaElement");
const alertDiv = document.getElementById("alertDiv");

translateButton.addEventListener("click", startTranslate);
document.addEventListener("DOMContentLoaded", getLanguages);

function startTranslate() {
  const translatorObject = new Translator();

  const languageSelectMenu = document.getElementById("languageSelectMenu");

  translatorObject.targetLangName = languageSelectMenu.value;

  sourceText = sourceTextAreaElement.value.replace(/(\r\n|\n|\r)/gm, "");

  if (languageSelectMenu.value === "Choose target Language" || sourceText === "") {
    if (languageSelectMenu.value === "Choose target Language") {
      UserInterface.showAlert("Please choose target Language!", alertDiv);
      UserInterface.styleAlertElement(languageSelectMenu);
    } else {
      UserInterface.showAlert("Please enter a word or a sentence!", alertDiv);
      UserInterface.styleAlertElement(sourceTextAreaElement);
    }
  } else {
    translatorObject
      .translateLanguage(sourceText)
      .then(text => UserInterface.addToUI(text.text[0], targetTextAreaElement))
      .catch(err =>
        UserInterface.showAlert("There is something wrong with HTTP request!!", alertDiv)
      );
  }
}

function getLanguages() {
  const translatorObject = new Translator();

  translatorObject
    .getLanguageList()
    .then(languageListObject => {
      UserInterface.addToSelectMenu(languageListObject.langs, languageSelectMenu);
    })
    .catch(err =>
      UserInterface.showAlert("We coulnd't get the available language list!!", alertDiv)
    );
}
