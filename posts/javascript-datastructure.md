---
title: Understanding Data Types in JavaScript
excerpt: Biguinner's Guide to JavaScript Data Types
image: javascript-datastructure.png
isFeatured: true
date: '2022-01-26'
---

Data Types specify what kind of data can be stored and manipulated within a program. A value in JavaScript is always of
a certain type. For example, a string, a boolean or a number.

# Primitive Types

In JavaScript, a primitive type is a data that is not an **object** and has no **methods**. **All primitives are ***immutable***, they cannot be altered**. Variables can be reassigned a new value, but the existing value can not
be changed in the ways that objects, arrays, and function can. There are 7 primitive data types: string, number, bigint,
boolean, undefined, symbol and null.

# String

```js
const str = "Single quotes string";
const str2 = 'Double quotes string';
const phrase = `Backticks string ${str} ${str2}`
```

The **string** data type is used to represent a sequence of characters. strings are useful for holding data that can be represented in text form.

They can be represented with single quotes, double quotes and backticks. There is no difference between single and double quotes.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

```js
const firstName = "Matheus";
const lastName = "Silva";

console.log(`Helo, my name is ${firstName} ${lastName}`)

// Helo, my name is Matheus Silva
```