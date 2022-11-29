// eslint-disable-next-line import/prefer-default-export
export const encodeHTMLEntities = (rawStr) => rawStr.replace(/[\u00A0-\u9999<>&]/g, ((i) => `&#${i.charCodeAt(0)};`));
export const decodeHTMLEntities = (str) => {
  const txt = new DOMParser().parseFromString(str, 'text/html');

  return txt.documentElement.textContent;
};
