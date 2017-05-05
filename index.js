const prepack = require("prepack");

module.exports = function prepackPlugin({ template }) {
  return {
    visitor: {
      Program: {
        enter(path) {
          const ast = path.node;
          const resultAst = template(
            prepack.prepackFromAst(ast, path.getSource()).code
          )();
          path.node.body = resultAst;
        }
      }
    }
  };
};
