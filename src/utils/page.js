import config from "config/config";

export const setPageTitle = (title) => {
  document.title = `${title ? title + " | " : ""}${config.appName}`;
};
