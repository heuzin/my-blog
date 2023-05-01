---
title: What is JavaScript?
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js-thumb.png
isFeatured: false
date: '2022-01-12'
---

JavaScript is a dynamic computer programming language, used both on the client-side and server-side that allows you to make web pages interactive. 

it's **the** most important programming language you need to know as a web developer. Over 97% of websites use JavaScript.

# How JavaScript Works

JavaScript is often used with HTML and CSS. While HTML and CSS are languages that give structure and style to web pages, JavaScript turns static web pages into interactive web pages by dynamically updating content, validating form data, controlling multimedia, and almost everything else on the web pages, allowing you to implement complex features.

# HTML, CSS and JavaScript, What's the difference?

![Difference between HTML, CSS and JavaScript](html_css_javascript_infographic.png)

# JavaScript overview

To define a variable, you use the ***const*** keyword. For example:

```js
const x = 10;
const y = 20;
```

ES6 added a new way to declare a variable with the ***let*** keyword:

```js
let x = 10;
let y = 20;
```

There's also another way to declare variables, which is with ***var*** keyword, but it's not a recomended to use it in JavaScript. You can learn more about declaring variables, good practices, different use cases, downsides and benefits [here](https://my-blog-blond-pi.vercel.app/posts/javascript-datastructure).

To declare a function, you use the ***function*** keyword:

```js
function add(a, b) {
  return a + b
}
```

The function above calculates the sum of two arguments.

To call the **add()** function, you use the following syntax:

```js
const result = add(x, y);
```

To log the result into the console window of the web browser, you use the **console.log()**:

```js
console.log(result);

// 30
```

You should see "**30**" print out in the console window.

[Click here](https://my-blog-blond-pi.vercel.app/) for a more in depth overview on JavaScript syntax and structures.

# Why use JavaScript

- JavaScript is the only programming language native to the web browser, meaning, it is the only client-side language available
- JavaScript is the most popular language, it's the standard programming language for web browsers and anybody who's into web development needs to use it
- There’s a low threshold to get started, there is no need to set up any kind of development, it comes installed on every modern web browsers
- Can load content into the document if and when the user needs it, without reloading the entire page
- Tests for what is possible in your browser and reacts accordingly

![JavaScript featues overview](features-of-javascript.png)

Before writing JavaScript it's important to know how it works under the hood. There are two important pieces to learn: How the web browser works, and the Document Object Model(DOM).
Learn more about it [here](https://www.javascript.com/).