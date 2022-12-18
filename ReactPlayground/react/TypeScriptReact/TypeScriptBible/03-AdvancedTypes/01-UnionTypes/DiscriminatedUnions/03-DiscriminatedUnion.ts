interface ITextbox {
  control: "Textbox";
  value: string;
  multiline: boolean;
}

interface IDatePicker {
  control: "DatePicker";
  value: Date;
}

interface INumberSlider {
  control: "NumberSlider";
  value: number;
}

interface ICheckbox {
  control: "Checkbox";
  value: boolean;
}

type Field = ITextbox | IDatePicker | INumberSlider | ICheckbox;

function intializeValue(field: Field) {
  switch (field.control) {
    case "Textbox":
      field.value = "";
      break;
    case "DatePicker":
      field.value = new Date();
      break;
    case "NumberSlider":
      field.value = 0;
      break;
    case "Checkbox":
      field.value = false;
      break;
    default:
      const shouldNotReach: never = field;
  }
}



/* Understanding the discriminated union pattern
In this lesson, we will learn what the discriminated union pattern is and how we can use it to narrow the type of a variable.

Understanding the discriminated union pattern
The discriminated union pattern has three key parts:

The first part of the pattern is to have a common singleton type property.

A singleton type is one that contains only a single value. An example of a singleton type is a string literal. This part of the pattern is called the discriminant:
 */

type Type1 = {
  commonName: "value1"
}
type Type2 = {
  commonName: "value2"
}
type TypeN = {
  commonName: "valueN"
}

/* The second part of the pattern is to have a union type of all the singleton types used. This part of the pattern is called the union: */

type UnionType = Type1 | Type2 | TypeN

/* The final part of the pattern is to have type guards on the common property which narrows the union type: */

function (param: UnionType) {
  switch (param.commonName) {
    case "value1":
      // type narrowed to Type1
      break;
    case "value2":
      // type narrowed to Type2
      break;

    case "valueN":
      // type narrowed to TypeN
      break;
  }
}



type Person = {
  name: string;
  address?: {
    line1: string;
    line2: string;
    state: string;
    zipcode: string;
  }
}
function validatePersonAddress(person: Person) {
  if (person.address === undefined) {
    throw 'Invalid address'
  }
}
function logZipcode(person: Person) {
  validatePersonAddress(person);
  console.log(person.address.zipcode);
}