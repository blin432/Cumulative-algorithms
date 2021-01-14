/*# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
remove([1,2,3,4], 3) // should remove 3 and return [1,2,4]
```



## Hints
the first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:
- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
  - [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator.
*/


function removeArray(...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

remove([1,2,3,4], 3) // should remove 3 and return [1,2,4]
