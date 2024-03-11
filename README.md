# fintary-part1

## Running the project

To run the function and check output, you can run the following command in the terminal:

```bash
yarn install
```

then

```bash
yarn dev
```

You can change the dummy data (orders/transactions json) in the src `src/data.ts` file

## Input/Output

I'm using the same output data structure of the example (array of arrays) but I think it would be better to use a dictionary with the order id as the key and the order and its transactions as the value. This way we can access the order and its transactions in O(1) time.

Given the Input:

```javascript
export const ORDERS = [
  {
    type: "order",
    customerName: "Alex Abe",
    orderId: "1",
    date: "2023-07-11",
    product: "Product A",
    price: 1.23,
  },
  {
    type: "order",
    customerName: "Brian Ben",
    orderId: "2",
    date: "2023-08-08",
    product: "Product B",
    price: 3.21,
  },
];
export const TRANSACTIONS = [
  {
    type: "txn",
    customerName: "Alex Abe",
    orderId: "1",
    date: "2023-07-11",
    product: "Product A",
    price: 1.23,
    transactionType: "paymentReceived",
    transactionDate: "2023-07-12",
    transactionAmount: 1.23,
  },
  {
    type: "txn",
    customerName: "Alex Abe",
    orderId: "1",
    date: "2023-07-11",
    product: "Product A",
    price: 1.23,
    transactionType: "refundIssued",
    transactionDate: "2023-07-13",
    transactionAmount: -1.23,
  },
  {
    type: "txn",
    customerName: "Brian Ben",
    orderId: "2",
    date: "2023-08-08",
    product: "Product B",
    price: 3.21,
    transactionType: "payment-1",
    transactionDate: "2023-08-11",
    transactionAmount: 1.21,
  },
  {
    type: "txn",
    customerName: "Brian Ben",
    orderId: "2",
    date: "2023-08-08",
    product: "Product B",
    price: 3.21,
    transactionType: "payment-2",
    transactionDate: "2023-08-13",
    transactionAmount: 2.0,
  },
];
```

It will output:

```javascript
[
  [
    {
      type: "order",
      customerName: "Alex Abe",
      orderId: "1",
      date: "2023-07-11",
      product: "Product A",
      price: 1.23,
    },
    {
      type: "txn",
      customerName: "Alex Abe",
      orderId: "1",
      date: "2023-07-11",
      product: "Product A",
      price: 1.23,
      transactionType: "paymentReceived",
      transactionDate: "2023-07-12",
      transactionAmount: 1.23,
    },
    {
      type: "txn",
      customerName: "Alex Abe",
      orderId: "1",
      date: "2023-07-11",
      product: "Product A",
      price: 1.23,
      transactionType: "refundIssued",
      transactionDate: "2023-07-13",
      transactionAmount: -1.23,
    },
  ],
  [
    {
      type: "order",
      customerName: "Brian Ben",
      orderId: "2",
      date: "2023-08-08",
      product: "Product B",
      price: 3.21,
    },
    {
      type: "txn",
      customerName: "Brian Ben",
      orderId: "2",
      date: "2023-08-08",
      product: "Product B",
      price: 3.21,
      transactionType: "payment-1",
      transactionDate: "2023-08-11",
      transactionAmount: 1.21,
    },
    {
      type: "txn",
      customerName: "Brian Ben",
      orderId: "2",
      date: "2023-08-08",
      product: "Product B",
      price: 3.21,
      transactionType: "payment-2",
      transactionDate: "2023-08-13",
      transactionAmount: 2,
    },
  ],
];
```
