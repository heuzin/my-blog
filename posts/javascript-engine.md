---
title: JavaScript Under The Hood
excerpt: What Is The JavaScript Engine and How It Works
image: javascript-engine.png
isFeatured: true
date: '2022-09-26'
---

A JavaScript engine is **a software component that executes JavaScript code**.

# Introduction

JavaScript is not understandable by computer, only browsers understands JavaScript. We need a program to convert our
JavaScript code into computer-understandable language. A JavaScript engine is a computer program that executes
JavaScript code and converts it into language a computer understands.

All modern browsers come with their own version of the JavaScript Engine but the most popular one is Google’s V8 Engine.
Google’s V8 engine powers Google Chrome browsers, as well as, Node.js. Node.js is a JavaScript runtime that is used to
build server-side applications outside of the browser.

![JavaScript Engine Diagram](javascript-engine-diagram.png)

# The Parser

The first thing that happens inside the engine, is that our code is parsed by a parser, which basically reads our code
line by line, and checks if the syntax of the code that we gave it, is correct. If everything is correct, the parser
produces a data structure known as the Abstract Syntax Tree, which is then translated into code computers understands.

# Interpreters and Compilers

Runs through the source code and executes it line by line. Code is read and executed all at the same time.

Works ahead of time to translate the code just written and compiles down to a language our machine can understand.

Have you heard of **_Babel_** or **_TypeScript_**? They are heavily used in the Javascript ecosystem and you should now
have a good idea of what they are:

-   **_Babel_** is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS
    code).
-   **_Typescript_** is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

# IS JAVASCRIPT AN INTERPRETED LANGUAGE?

JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much,
much slower than compiled languages. This used to be okay for JavaScript, but now with modern JavaScript and
fully-fledged web applications that we built and use today, low performance is no longer acceptable.

Now many people still think that JavaScript is interpreted language, but that’s not really true anymore. So instead of
simple interpretation, Modern JavaScript engine now uses a mix between compilation and interpretation which is called
**Just-in-time(JIT) compilation**.

This approach basically compiles the entire code into machine code at once and then executes it right away. The
execution happens immediately after the compilation. And this is perfect for JavaScript as it’s really a lot faster than
just execution code line by line.

![Interpreter and Compiler](interpreter-compiler.png)

![JIT Compiler](jit-compiler.png)

In the next chapter, we will be leraning about JavaScript Call Stack and Memory Heap.
