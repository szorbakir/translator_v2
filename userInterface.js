class UserInterface {
  static addToSelectMenu(langsObject, languageSelectMenu) {
    // <option value="1">One</option>
    // <option value="2">Two</option>
    // <option value="3">Three</option>

    for (const key in langsObject) {
      //console.log(key, langsObject[key]);

      const newOption = document.createElement("option");
      newOption.setAttribute("value", key);
      newOption.appendChild(document.createTextNode(langsObject[key]));

      languageSelectMenu.appendChild(newOption);
    }
  }

  static addToUI(translatedText, el) {
    el.value = translatedText;
  }

  static showAlert(message, el) {
    //* create alert element:
    const new_alert = document.createElement("div");
    new_alert.className = `alert alert-danger`;
    new_alert.setAttribute("role", "alert");
    new_alert.style.marginTop = "10px";
    new_alert.appendChild(document.createTextNode(message));

    //* add alert element to the submit form
    el.appendChild(new_alert);
    //* after 2.0s remove alert element if success:
    setTimeout(function() {
      new_alert.remove();
    }, 3500);
  }

  static styleAlertElement(el) {
    el.style.borderWidth = "2px";
    el.style.borderColor = "#dc3545";

    setTimeout(function() {
      console.log("Hello");
      el.removeAttribute("style");
    }, 3500);
  }
}
