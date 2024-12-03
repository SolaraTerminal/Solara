// This file interacts with blockchain APIs (mocked for this example)

export const fetchBlockchainData = async () => {
  // Mocking API response
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        transactions: [
          { hash: '0x123...', amount: 0.5 },
          { hash: '0x456...', amount: 1.2 },
          { hash: '0x789...', amount: 3.4 }
        ],
        blocks: 123456
      });
    }, 1000);
  });
};
