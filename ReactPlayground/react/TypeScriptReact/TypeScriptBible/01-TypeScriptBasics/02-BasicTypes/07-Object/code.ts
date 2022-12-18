const customer = {
  name: "Lamps Ltd",
  turnover: 2000134,
  active: true
};



customer.turnover = 500000;

customer.profit = 10000; /// Does not exist.. on object definition


interface testCustomer {
  name: string;
  turnover: number;
  active: boolean;
}

const customer2: testCustomer = {
  name: "Lamps Ltd",
  turnover: 2000134,
  active: true
};

customer2.turnover = 500000;

customer2.profit = 10000; /// Does not exist.. on object definition


type testCustomer2 = {
  name: string;
  turnover: number;
  active: boolean;
};


const customer3: testCustomer2 = {
  name: "Lamps Ltd",
  turnover: 2000134,
  active: true
};


customer3.turnover = 500000;
customer2.profit = 10000; /// Does not exist.. on object definition
