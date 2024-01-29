/**
 * @fileoverview limit amount of ts-nocheck comments in project
 * @author r_korzhoff
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/nocheck"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("ts-nocheck", rule, {
  valid: [
    {
      code: "// @ts-nocheck",
    },
  ],
  invalid: [
    {
      code: "// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck\n// @ts-nocheck",
      errors: [{ messageId: "max-allowed" }],
    },
  ],
});
