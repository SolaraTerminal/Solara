import React, { useEffect, useState } from 'react';
import { fetchBlockchainData } from '../services/blockchainAPI';

const BlockchainView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const blockchainData = await fetchBlockchainData();
      setData(blockchainData);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Blockchain Transactions</h2>
      {data ? (
        <ul>
          {data.transactions.map((tx, index) => (
            <li key={index}>
              <strong>{tx.hash}</strong>: {tx.amount} ETH
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading transactions...</p>
      )}
    </div>
  );
};

export default BlockchainView;
