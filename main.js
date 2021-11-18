"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        var concat = word + " world";
        console.log(concat);
        var slice = concat.split(" ", 2);
        return word.length;
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var space = sentence.split("", 100);
        return space;
    };
    StringManipulations.prototype.findvowel = function (str) {
        var vowels = /[aeiou]/gi;
        var result = str.match(vowels);
        var count = result.length;
        console.log(count);
    };
    return StringManipulations;
}());
var NumberManipulations = /** @class */ (function () {
    function NumberManipulations() {
    }
    NumberManipulations.prototype.findPrime = function (num) {
        if (num < 2) {
            console.log("Not a Prime");
        }
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log("Not a Prime");
                break;
            }
        }
        console.log("Prime");
    };
    NumberManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        var n = num;
        while (n > 9) {
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
            n = sum;
            sum = 0;
        }
        console.log(n === 1 ? "So ".concat(num, " is a magic number") : "".concat(num, " is  not a magic number"));
    };
    return NumberManipulations;
}());
var str1;
str1 = "hello";
var num1;
num1 = 23;
var str_manipulation = new StringManipulations();
var num_manipulation = new NumberManipulations();
str_manipulation.print(str1);
str_manipulation.printWithSpace(str1);
str_manipulation.findvowel(str1);
num_manipulation.findPrime(num1);
num_manipulation.findMagic(num1);
