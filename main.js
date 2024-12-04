const Solara = require('./solara');
const { validateBlockchain } = require('./blockchainUtils');
const config = require('./config');

const solara = new Solara();
solara.start();

solara.addBlock("First user transaction");
solara.addBlock("Second user transaction");

const blockchainValid = validateBlockchain(solara.getBlockchain());
console.log("Is the blockchain valid? ", blockchainValid);

console.log("Solara Configuration:", config);
