import { getBlock } from '../src/utils/blockchain';

jest.mock('web3', () => {
  return jest.fn().mockImplementation(() => {
    return {
      eth: {
        getBlock: jest.fn(() => Promise.resolve({ number: 1234, hash: '0xabc123' })),
      },
    };
  });
});

test('fetches block data', async () => {
  const block = await getBlock(1234);
  expect(block.number).toBe(1234);
  expect(block.hash).toBe('0xabc123');
});
