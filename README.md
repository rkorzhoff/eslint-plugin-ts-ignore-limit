# eslint-plugin-no-excessive-ts-ignore
*Important* Looks like it's not about ESLint. This plugin doesn't work as expected, it only checks number of comments inside single file.
You should find another approach to count number of comments, for example use standalone script.

Limit amount of @ts-ignore / @ts-nocheck / @ts-expect-error comments in file

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-excessive-ts-ignore`:

```sh
npm install eslint-plugin-no-excessive-ts-ignore --save-dev
```

## Usage

Add `no-excessive-ts-ignore` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-excessive-ts-ignore"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-excessive-ts-ignore/expect-error": ["error", 5] // 10 is default limit,
        "no-excessive-ts-ignore/ignore": ["error", 5] // 10 is default limit,
        "no-excessive-ts-ignore/nocheck": ["error", 5] // 10 is default limit,
    }
}
```
