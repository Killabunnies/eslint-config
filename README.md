# Killabunnies Code Style

Killabunnies has a unique taste of coding style, which inspired me to create an ESLint config
that can be installed for any project. This is created for any Typescript project.

## Install

```
npm install -D @killabunnies/eslint-config
```

## Use

```js
module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: "./",
		project: './tsconfig.json',
	},
	extends: [
		"@killabunnies/eslint-config"
	]
}
```
