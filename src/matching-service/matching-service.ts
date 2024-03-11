interface Order {
  customerName: string;
  orderId: string;
  date: string;
  product: string;
  price: number;
}

interface Transaction extends Order {
  transactionType: string;
  transactionDate: string;
  transactionAmount: number;
}

class MatchingService {
  generateKey(order: Order): string {
    return `${order.customerName}-${order.orderId}-${order.date}-${order.price}`;
  }

  handler(
    orders: Order[],
    transactions: Transaction[]
  ): (Order | Transaction)[][] {
    const transactionMap: { [key: string]: Transaction[] } = {};

    // Populate the transactionMap for quick lookup
    transactions.forEach((transaction) => {
      const key = this.generateKey(transaction);
      if (!transactionMap[key]) {
        transactionMap[key] = [];
      }
      transactionMap[key].push(transaction);
    });

    // Match orders to transactions using the map
    const matchedRecords: (Order | Transaction)[][] = [];
    orders.forEach((order) => {
      const key = this.generateKey(order);
      const matchingTransactions = transactionMap[key];
      if (matchingTransactions?.length) {
        matchedRecords.push([order, ...matchingTransactions]);
      }
    });

    return matchedRecords;
  }
}

export { MatchingService };
