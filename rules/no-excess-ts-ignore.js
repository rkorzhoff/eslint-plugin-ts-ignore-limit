module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "limit the number of @ts-ignore comments",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "integer",
        default: 10, // Default limit
      },
    ],
  },
  create(context) {
    let tsIgnoreCount = 0;
    const limit = context.options[0] || 10; // Default limit

    return {
      Program() {
        tsIgnoreCount = 0;
      },
      LineComment(node) {
        if (node.value.includes("@ts-ignore")) {
          tsIgnoreCount++;
          if (tsIgnoreCount > limit) {
            context.report({
              node,
              message: `Exceeding @ts-ignore comments limit: ${limit}`,
            });
          }
        }
      },
    };
  },
};
