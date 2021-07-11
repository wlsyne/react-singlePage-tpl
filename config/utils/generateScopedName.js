const { relative } = require("path");
const genericNames = require("generic-names");

const generate = genericNames("[local]__[hash:base64:5]", {
  context: process.cwd(),
});

const generateScopedName = (localName, filePath) => {
  const relativePath = relative(process.cwd(), filePath);
  return generate(localName, relativePath);
};

module.exports = { generateScopedName };
