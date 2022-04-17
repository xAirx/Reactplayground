/* In the same way, as you learned, you can use interface as function type.

 Generic interface can also be used as the function type.

Example: Generic Interface as Function Type
 */

interface KeyValueProcessor<T, U> {
  (key: T, val: U): void;
}

function processNumKeyPairs(key: number, value: number): void {
  console.log("processNumKeyPairs: key = " + key + ", value = " + value);
}

function processStringKeyPairs(key: number, value: string): void {
  console.log("processStringKeyPairs: key = " + key + ", value = " + value);
}

let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345

let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Bill"); //Output: processStringKeyPairs: key = 1, value = Bill

/* In the above example, generic interface KeyValueProcessor includes the generic signature of a method without the method name.
This will allow us to use any function with the matching signature. The generic type will be set at the time of creating a variable such as numKVProcessor and strKVProcessor.

The above example can be re-written as below.

Example: Generic Interface as Function Type
 */

interface KeyValueProcessor<T, U> {
  (key: T, val: U): void;
}

function processKeyPairs<T, U>(key: T, value: U): void {
  console.log(`processKeyPairs: key = ${key}, value = ${value}`);
}

let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345

let strKVProcessor: KeyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill

/*
As you can see, we declared a function type numKVProcessor as let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;.
The type number will be used as the underlaying type of generic functionprocessKeyPairs. This will remove the need of defining separate functions for different data types.

 */

/* Example: Generic Interface as Function Type */

interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void;
}

class kvProcessor implements IKeyValueProcessor<number, string> {
  process(key: number, val: string): void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill

/*
In the above example, the generic type parameters are being set at the time of implementing an interface e.g class kvProcessor implements IKeyValueProcessor<number, string>.
This will force us to implement the method process() with number and string parameters.

 */
