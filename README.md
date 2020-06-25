# Introduction to Unit Testing in JavaScript

## Installation

First, clone this repository. For this lesson we will be using a repository set up to run Node.js, which means you'll be seeing some commands we haven't discussed that start with `npm`. We aren't going to dig into what this means today, but ultimately it allows us to pull in some powerful tools outside of our basic html/css/js files.

```shell
git clone git@github.com:turingschool-examples/testing-javascript.git  
```

 Once, you have it on your computer, `cd` into the directory in the terminal and run the following command:

```shell
npm install
```

This command installs all of the dependencies we need to run tests.

## Getting Started

We'll be modifying two files as we complete these exercises:

- `implentation.js`
- `test.js`

Just to verify that everything works, there should be a first example in place.

```javascript
// implementation.js
function square(num) {
  return num * num;
}
```

```javascript
// test.js
describe('square', function () {

  it('returns the square of a number', function () {
    var result = square(2);

    assert.equal(result, 4);
  });

});
```
## Running a Test

From your command line, make sure you are navigated into this repository's root. Run the following:

```bash
npm test test.js
```

What is that doing? `npm test` is the command, and `test.js` is the single argument we are passing it. We are telling the computer to run tests, specifically, the tests is `test.js` file.

## Together

Let's write a few cases together.
- `addTwo();`
- `multiplyTwo();`
- `largerNumber();`

## Your Turn

**Pro Tip**: Feel free to google to figure out how to implement some of this logic.  

### Subtract

Create a function that subtracts the second argument from the first argument passed in. For instance:

```javascript
subtract(5, 3);

=> 2

subtract(12, 2);

=> 10
```

### Longer Word

Create a function that finds which argument contains the longer word. For instance:

```javascript
longerWord("hi", "hello");

=> "hello"

longerWord("hey", "hi");

=> "hey"
```

### Reverse String

Create a function that reverses a string that is passed in as a parameter. For instance:

```javascript
reverseString('reverse');

=> 'esrever'
```

Try to do this without using the `.reverse()` function in JavaScript.

### Longest Word

Create a function that can find the longest word in a sentence. For instance:

```javascript
findLongestWord('We had a great time!');

=> 'great'
```

### Time Convert

Create a function that converts a number of minutes passed in as a parameter to the hours and minutes separated by a colon. For instance:

```javascript
convertTime(126);
'2:06'

convertTime(45);
=> '0:45'
```

### FizzBuzz

FizzBuzz is a classic programming program that a lot of programmers [apparently can't do][atwood].

[atwood]: https://blog.codinghorror.com/why-cant-programmers-program/

We're going to write a function called `fizzBuzz()` that will behave as follows with the each rule taking precedence over all previous rules:

- If we pass it a number, it will return that number.
- If we pass a number that is a multiple of 3, it will return 'Fizz'.
- If we pass it a number that is a multiple of 5, it will return 'Buzz'.
- If we pass it a number that is a multiple of both 3 and 5, it will return 'FizzBuzz'.

## Resources

* [Mocha Docs](https://mochajs.org/)
* [Chai Docs](http://chaijs.com/)  

## Dive Deeper

* [Running Tests In the Browser](http://mochajs.org/#running-mocha-in-the-browser)  
* [Blog Post about TDD vs BDD](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)

## Configure Mocha
Inorder to configure Mocha to run tests from a separate directory, create a `mocha.opts` file under the `test` directory with the folder name mentioned.
example: `testingWithSinon`
now running `mocha` will detect the `*.test.js` files and executes all the tests in those files. 

[Answer in Stackoverflow](https://stackoverflow.com/questions/10753288/how-to-specify-test-directory-for-mocha)

## Sinon
Sinon provides multiple mocking functions like for ex: `useFakeTimers()`