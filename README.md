<div align="center">
  <img src="https://user-images.githubusercontent.com/99760654/177083091-7e15f4e5-b65e-4466-b858-25c89d6907c2.png" width="200" />
  <h1>Falseify</h1>
  Generate "falsey" (but realistic) values for testing
</div>

## ⚛ Support All Frameworks

Falseifly supports all web frameworks. You can use it alongside React, Vue, Svelte, etc. (As long as it supports ES6 import/export statements)

For projects that use CommonJS modules, you can install `@falseify/commonjs` instead of `@falseify/core`. Note that both modules should not be installed at the same time.

## 🔌 Try it Online

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://google.com/)

### Documentation

[API Documentation](https://falseify.js.org/)

## ⚡ Features

- Realistic personal information - This generates names, phone numbers, emails, etc.
- Generate internet personas - This creates usernames, emails, IPs, etc.
- Blazing fast - Falseify does not require any dependencies and will fit well in a browser environment. Other modules similar to this are higher in size and don't work well inside a browser environment.
- Support for any framework - You can use any framework alongside Falseify. This includes React, Svelte, Vue, etc. `@falseify/core` supports ES6 imports/exports whereas `@falseify/commonjs` supports CommonJS require statements.

> **Note**: All of the information which Falseify generates
> can sometimes be valid. Please do not try contacting
> or calling any of these generated values.

## 📦 Installation

You can install Falseify from the `npm` registry.

```bash
# npm
npm install @falseify/core

# yarn
yarn add @falseify/core

# pnpm
pnpm add @falseify/core
```

> **Note**: The package `@falseify/core` **does not** support ES6 imports. Please use the same installation process but install `@falseify/commonjs` instead.

## ✨ Usage

```js
import * as falseify from "@falseify/core";

console.log(falseify.person.fullName()); // --> Roderick Aswin
console.log(falseify.person.email()); // --> ElwynNigel18@gmail.com

// Custom email domain
console.log(falseify.person.email("hotmail.com")); // --> MordecaiClaude99@hotmail.com
```

> **Note**: The `@falseify/commonjs` package works the same way, except that you require it using: `const falseify = require("@falseify/commonjs")`
