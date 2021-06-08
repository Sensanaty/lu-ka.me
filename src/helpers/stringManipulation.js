/**
 * Takes a String without whitespaces, and returns the capitalized version of the string
 * @param {string} string
 * @returns {string}
 */
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
