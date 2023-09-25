---
title: The var keyword in JavaScript
excerpt: Why is var considered a bad practice in Javascript?
image: javascript-variables.png
isFeatured: false
date: '2022-06-07'
---

To fully understand why var is bad, you first need to understand three core concepts of Javascript: Declaration,
Hoisting, and Scope.

## Declaration vs Initialization

Javascript **var** allows you to declare a variable before you need to use it.

```js
var myVariable; // This is 'undefined' here
```

This assigns a default value of **_undefined_** to the declared variable. When you are ready to use it, you can
**initialize** the variable with a value.

```js
myVariable = 'a value';
```

Until the variable is initialized it will return the special type **undefined** if it is used.

## Variable Scope

Javascript contains three levels of scope – **_Global, Functional, and Block_**. Global variables are declared outside
of any function and live at the root level of the entire running application. They can easily be accessed by outside
manipulation, so they should never be used!

A variable is Function scoped if it is usable anywhere inside a defined function, but can’t be accessed from outside
that function. This includes inside any child functions and blocks of code (defined by **{}**).

By contrast, a Block Scoped variable is only usable inside the **{}** that is defined within. Even child blocks and
functions.

**var** is either Global Scope or Function Scope.

## Hoisting

Combining the other two concepts, you get hoisting. A **var** declared anywhere in a function will be automatically
included at the top level of that function and assigned ‘undefined’. For instance:

```js
function hello(assign) {
    console.log(message); //prints undefined
    if (assign) {
        var message = 'Hello there!';
        console.log(message); // prints "Hello there!"
    }
}
```

Notice that you can print out the contents of message even though it may have never been initialized. This is because
Javascript actually rewrites that code into:

```js
function hello(assign) {
    var message = undefined;
    console.log(message); //prints undefined
    if (assign) {
        message = 'Hello there!';
        console.log(message); // prints "Hello there!"
    }
}
```

## What is let?

So, how is **let** different from **var**? A variable declared with **let** will be automatically Block scope, and it
will not be Hoisted. So, from our example above:

```js
function hello(assign) {
    console.log(message); // Reference Error: message is not defined
    if (assign) {
        let message = 'Hello there!';
        console.log(message); // prints "Hello there!"
    }
}
```

If you try to use a variable declared with **let** either before it is initialized or outside of its scope, you will get
a **ReferenceError**.

## What is const?

When you use **let** you can reassign the variable to anything you want at any time. If you want the variable to be
constant and unchangeable, use **const**. There is no other difference between **let** and **const**.

If you try to change a **const** declared variable, you will get a **TypeError** instead of a **ReferenceError**.

# Conclusion

**let** and **const** introduce block scope that allows us to write clean and less error-prone code. You don’t need to
think twice when declaring variables inside blocks. It is easier to work with block scope than with function scope. The
var usage has been being discouraged.

Please, keep in mind that you should use a transpiler tool, like Babel, to transpile your code from ES6 to ES5, to make
sure it will run in any browser. Not all browsers support the complete ES6 specification yet.
