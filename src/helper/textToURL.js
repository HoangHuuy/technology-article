const textToURL = (text) =>
  text ? text.toLowerCase().replace(/ /g, "-").replace(/%/g, "%25") : "";

export default textToURL;
