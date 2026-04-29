// language.js

function language(v, en, cn) {
  return v === 0 ? cn : v === 1 ? en : en;
}

class Language {
  constructor(language) {
    this.language = language === null ? 0 : language;
  }

  loading() {
    return language(this.language, "Loading...", "加载中...");
  }
}

module.exports = { Language, language };
