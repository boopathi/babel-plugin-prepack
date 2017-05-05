const prepack = require("prepack");

module.exports = function prepackPlugin({ template }) {
  return {
    visitor: {
      Program: {
        enter(path) {
          path.node.body = template(
            prepack.prepackFromAst(path.node, path.getSource()).code
          )();
        }
      }
    }
  };
};
