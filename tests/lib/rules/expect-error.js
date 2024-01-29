/**
 * @fileoverview limit amount of ts-expect-error comments in project
 * @author r_korzhoff
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/expect-error"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("ts-expect-error", rule, {
  valid: [
    {
      code: "// @ts-expect-error comments",
    },
  ],
  invalid: [
    {
      code: "// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error\n// @ts-expect-error",
      errors: [{ messageId: "max-allowed" }],
    },
  ],
});
