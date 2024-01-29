/**
 * @fileoverview limit amount of ts-ignore comments in project
 * @author r_korzhoff
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/ignore"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("ts-ignore", rule, {
  valid: [
    {
      code: "// @ts-ignore",
    },
  ],
  invalid: [
    {
      code: "// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore\n// @ts-ignore",
      errors: [{ messageId: "max-allowed" }],
    },
  ],
});
