import LocalizedStrings from "react-localization";
import English from "./languages/english.js";

let Strings = new LocalizedStrings({
  en: English,
});
Strings.setLanguage('en');
export { Strings };