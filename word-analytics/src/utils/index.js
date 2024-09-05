export const getNumberOfWords = (text) => {
  return text.split(" ").filter((word) => word !== "").length;
};
