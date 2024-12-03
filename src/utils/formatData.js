// Utility function to format blockchain data
export const formatTransactionData = (tx) => {
  return `Transaction ${tx.hash} processed with amount ${tx.amount} ETH`;
};
