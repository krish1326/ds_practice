let test = require("./dummy").dummyData;
/**
 * Hash Tables: They are used to access the data very fastly.
 * Every programming language has their own implementation
 * of hash tables we will use the object listerals or maps
 * to store the data
 * 
 * characteristics of a hash function:
 * 1. it should be fast.
 * 2. It should dirstibute values uniformly.
 * 3.the output should be deterministic : The output is same 
 * everytime for given input. So, it means that it must be a pure 
 * function
 *
 */
console.log(Math.random() * (1000).toString(16).substring(2, 8), test.assets[1].p);