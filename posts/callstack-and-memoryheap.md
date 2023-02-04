---
title: JavaScript Call Stack and Memory Heap
excerpt: What It Is and Why It's Necessary
image: javascript-callstack.png
isFeatured: true
date: '2023-02-03'
---

# Call Stack

The **Call Stack** is a place used by the JavaScript Engine to run and keep track of what is happening line by line in our code. A region in memory which operates in first in last out mode.

When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

The script will stop when the call stack is empty.

```js
function subtractTwo(num) {
    return num - 2
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal)
}

calculate()
```

When the JavaScript engine executes this script, it places the global execution context (denoted by main() function) on the call stack.

```js
main()
//Call Stack
```

The global execution context enters the creation phase and moves to the execution phase.

The JavaScript engine executes the call to **calculate** function, and creates a function execution context and pushes it on top of the call stack. 

```js
calculate()
main()
//Call Stack
```

Within the function we can see that another function is called, **subtractTwo**. JavaScript engine creates another function execution context for the **subtractTwo** function and places it on the top of the call stack.

```js
subtactTwo()
calculate()
main()
//Call Stack
```

Once subtractTwo is done running, its removed from the call stack.

```js
calculate()
main()
//Call Stack
```

At this point, the **calculate** function is on the top of the call stack, the JavaScript engine executes and pops it off the call stack.

```js
main()
//Call Stack
```

Now, the call stack is empty so the script stops executing.

```js
//Call Stack
```

# Memory Heap

 The **Memory Heap** is a place to store and write information, variables, objects and data of our app in an unordered fashion. It allows us to use variables to point to different storage areas.

```js
const number = 10 //allocate memory for number
const string = 'text' //allocate memory for string
const human = { // allocate memory for an object and it's values
    firstName: Matheus,
    lastName: Silva
}
```

In the example above, a place in memory is allocated to store the variables number and string and for the human objext, and each one of them points to its respective values.

## Memory life cycle

In JavaScript, when we create variables, functions, or anything you can think of, the JS engine allocates memory for this and releases it once it's not needed anymore.

Every time we assign a variable or create a function, the memory for that always goes through the same following stages:

- Allocate memory

JavaScript takes care of this for us: It allocates the memory that we will need for the object we created.

- Use memory

Using memory is something we do explicitly in our code: Reading and writing to memory is nothing else than reading or writing from or to a variable.

- Release memory

This step is handled as well by the JavaScript engine. Once the allocated memory is released, it can be used for a new purpose.

![Memory Life Cycle](memory-life-cycle.png)