
/* Prefix readonly is used to make a property as read - only.
  Read - only members can be accessed outside the class, but their value cannot be changed. */

interface Product {
  readonly name3: string;
  unitPrice: number;
}

const table12: Product = {
  name3: "Table",
  unitPrice: 500,
};

table12.name3 = "Better Table";



interface IEmployee {
  readonly empCode: number;
  empName: string;
}

let empObj: IEmployee = {
  empCode: 1,
  empName: "Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'