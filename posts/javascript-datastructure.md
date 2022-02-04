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
boolean, undefined, null and symbol.

## String

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

## Numbers

```js
const a = 100;
const b = 55.5;
```

The **number** data type is used to represent positive or negative numbers, with or without decimal place.

There are many operations for numbers, e.g. multiplication **'*'**, division **'/'**, addition **'+'**, subtraction **'-'**, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

```js
const infinity = 1 / 0; // Infinity
const negInfinity = -1 / 0; // -Infinity
const notANumber = 'Hello' / 2; // NaN
```

## BigInt

The **BigInt** represents integers of arbitrary length.

In JavaScript, the “number” type cannot represent integer values larger than ***(253-1)*** (that’s ***9007199254740991***), or less than ***-(253-1)*** for negatives. It’s a technical limitation caused by their internal representation.

A **BigInt** value is created by appending n to the end of an integer:

```js
const bigInt = 1234567890123456789012345678901234567890n;
```

## Boolean

The **boolean** data type has only two values: ***true*** or ***false***.

This type is commonly used to store yes/no values: ***true*** means “yes, correct”, and ***false*** means “no, incorrect”.

```js
const isReading = true;   // yes, I'm reading
const isSleeping = false; // no, I'm not sleeping
```

Boolean values also come as a result of comparisons.

```js
const a = 2, b = 5, c = 10;
 
console.log(b > a) // true
console.log(b > c) // false
```

## Undefined

The **undefined** type can only have one value, which is a special value ***undefined***. One example is when a variable is declared but it has not been assigned a value yet.

```js
const a;
 
console.log(a) // undefined
```

## Null

The **null** type is also a special value, which can only be ***null***. A **null** value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.

```js
let name = null;
```

## Symbols

The **symbol** type is used to create unique identifiers for objects. We will get deeper into symbols in the **object** section.

# Summary

There are 8 basic data types in JavaScript.

* ***number*** for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
* ***bigint*** is for integer numbers of arbitrary length.
* ***string*** for strings. A string may have zero or more characters, there’s no separate single-character type.
* ***boolean*** for true/false.
* ***null*** for unknown values – a standalone type that has a single value null.
* ***undefined*** for unassigned values – a standalone type that has a single value undefined.
* ***symbol*** for unique identifiers.
* ***object*** for more complex data structures.

In the next chapter, we will be talking about Objects, also referred as **Non-primitive or Reference Data Type**. Learn more about it [**here**](https://www.javascript.com/).