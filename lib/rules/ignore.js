/**
 * @fileoverview limit amount of ts-ignore comments in project
 * @author r_korzhoff
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    messages: {
      "max-allowed": "Exceeding maximum allowed //@ts-ignore comments",
    },
    docs: {
      description: "limit the number of // @ts-ignore comments",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "number",
        minimum: 0,
        default: 10,
        description: "Maximum number of @ts-ignore comments allowed",
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    let tsIgnoreCount = 0;
    const tsIgnoreLimit = context.options[0] || 10;

    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();

        comments.forEach((comment) => {
          if (comment.value.trim() === "@ts-ignore") {
            tsIgnoreCount++;
            if (tsIgnoreCount > tsIgnoreLimit) {
              context.report({
                node: comment,
                messageId: "max-allowed",
              });
            }
          }
        });
      },
    };
  },
};
