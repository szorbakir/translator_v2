class Translator {
  constructor(sourceLangName = "", targetLangName = "", sourceText = "") {
    this.sourceLangName = "";
    this.targetLangName = "";
    this.sourceText = "";

    //* API key from Yandex API:
    this.apiKey =
      "trnsl.1.1.20190608T163605Z.1f8b1981e1c74c57.b2667b900d2f3a9940e4ab10fb24198e07dde792";
  }

  async translateLanguage(sourceText) {
    this.sourceText = sourceText;

    const url = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${this.apiKey}&text=${
      this.sourceText
    }`;

    const responseDetect = await fetch(url, {
      method: "POST"
    });

    const data = await responseDetect.json();

    this.sourceLangName = data.lang;

    // console.log(this.sourceLangName);
    // console.log(this.targetLangName);
    // console.log(this.sourceText);

    const url_translate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
      this.apiKey
    }&text=${this.sourceText}&lang=${this.sourceLangName}-${this.targetLangName}`;

    const responseTranslate = await fetch(url_translate);
    return await responseTranslate.json();
  }

  async getLanguageList() {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${this.apiKey}&ui=en`;

    const response = await fetch(url, {
      method: "POST"
    });
    return await response.json();
  }

  // async translate() {
  //   console.log(this.sourceLangName);
  //   console.log(this.targetLangName);
  //   console.log(this.sourceText);
  // }
}
