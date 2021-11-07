require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food nose crawl snow pulse coral light army gentle'; 
let testAccounts = [
"0xa76d5f3c2943633907f7b9a21d4f29a66c60324e1f104f6bb8fa6deb460e0f88",
"0x7c9fd9ce8890b20ff0bb2ffe463da9887ef492b4e56d3bdd9f82ab2619351572",
"0x682552bdeb421a2ebae60db603b6438bb870d84f812cdd09779c5f6d770bbbfd",
"0x0180108bf4aa53113f8d26ac10ebb8bb4168e3e4c95f95c4cbb4d5850ab6896c",
"0xb02695a8064c0ea2e924409723ad3d6fed3e9799fe73a6d85ef1a081fbe4432a",
"0xff1d4b13f5304e68a7a63d49224133ea6edb92a569a11f010afc81ecf4f6ea0c",
"0xb8da1aa62d624a12f64e7118dd95cfcbe7e935e957adf1ab91c11e8324f38c06",
"0x398dfc4134abbd40d7018150e655c7b53e7e12a9c3970886597238b11c6b8519",
"0xd52b4c65fc00565c55b95f03a143f340f99e95db4ee2443f27efb51ea79b9307",
"0x97a0fccb3e92f791447e0aeccfb4a1c0c47b5ee0d8c4ae1605733dae036ba8d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

