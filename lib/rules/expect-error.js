/**
 * @fileoverview limit amount of ts-expect-error comments in project
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
      "max-allowed": "Exceeding maximum allowed //@ts-expect-error comments",
    },
    docs: {
      description: "limit the number of // @ts-expect-error comments",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "number",
        minimum: 0,
        default: 10,
        description: "Maximum number of @ts-expect-error comments allowed",
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    let tsExpectErrorCount = 0;
    const tsExpectErrorLimit = context.options[0] || 10;

    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();

        comments.forEach((comment) => {
          if (comment.value.trim() === "@ts-expect-error") {
            tsExpectErrorCount++;
            if (tsExpectErrorCount > tsExpectErrorLimit) {
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
