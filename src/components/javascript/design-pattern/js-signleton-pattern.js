class Settings { // Singleton Design Pattern
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }

    this.SettingsObject = {
      'background': '#ff0000',
      'version': Math.floor(Math.random() * 2021)
    };

    Object.freeze(this.SettingsObject);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.SettingsObject[key];
  }
}