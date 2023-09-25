---
title: JavaScript Non-Primitive Types
excerpt: Also known as derived data types or reference data types
image: non-primitive-types.png
isFeatured: false
date: '2022-02-26'
---

Diferent than primitive types, non-primitive types are **_mutable_** and refers to objects. Non-primitive types contains
multiple values or complex data.

# Objects

Objects are used to store various keyed collections and more complex entities. An object is an unordered collection of
key-value pairs. Each key-value pair is called a property.

The key of a property can be a string. And the value of a property can be any value, e.g., a **string**, a **number**, an **array**, and even a **function**.

JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.

The following example creates an empty object using the object literal notation:

```js
let empty = {};
```

To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object:

```js
let person = {
    firstName: 'Matheus',
    lastName: 'Silva'
};
```

# Accessing properties

To access the firstName property of the person object, you use the following expression:

```js
person.firstName
```

You can also access the value of an object’s property via the array-like notation

```js
person['firstName']
```

# Modifying the value of a property

```js
let person = {
    firstName: 'Matheus',
    lastName: 'Silva'
};

person.firstName = 'Matt';

console.log(person);
```

Output:

```js
{ firstName: 'Jane', lastName: 'Doe' }
```

# Adding and deleting properties

In JavaScript, you can add a property to an object after object creation.

```js
person.age = 29;
```

To delete te property, you can use the **delete** keyword

```js
delete person.age;
```

# Summarry

* An object is a collection of key-value pairs.
* Use the dot notation (.) or array-like notation ([]) to access a property of an object.
* The delete operator removes a property from an object.