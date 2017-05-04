var namehash = require('eth-ens-namehash');

let domain = process.argv[2]

console.log(namehash(domain))