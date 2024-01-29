/**
 * @fileoverview limit amount of ts-nocheck comments in project
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
      "max-allowed": "Exceeding maximum allowed //@ts-nocheck comments",
    },
    docs: {
      description: "limit the number of // @ts-nocheck comments",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "number",
        minimum: 0,
        default: 10,
        description: "Maximum number of @ts-nocheck comments allowed",
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    let tsNoCheckCount = 0;
    const tsNoCheckLimit = context.options[0] || 10;

    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();

        comments.forEach((comment) => {
          if (comment.value.trim() === "@ts-nocheck") {
            tsNoCheckCount++;
            if (tsNoCheckCount > tsNoCheckLimit) {
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
