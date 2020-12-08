require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan repeat night proud include area bottom ghost'; 
let testAccounts = [
"0x576e626dbba580876fed28a8745175f50f56ed8cbb8fd5b726556cef296d529a",
"0x7dfeb50906d99439110dd4bf784dde6344e36b5c8654ebb6deb37a80a2539420",
"0xbc941377bc863e7a9649996ef76fc26b4b81d338ef890a68efa53a1dbf3d8e6b",
"0x776e6de9bf05eb04b02699e08238886f237f60c52ce146fe4f56582e7746bc47",
"0xbbd4ae8695df07d029930594702ce22cc439ca961944b663e757ad7df627aa9c",
"0xdfb7b308409ff0e783d58df46dfa69b44158f3a8cfb999201cffb8e4a9c95c52",
"0x8801eff547684509c0a56f9385541077849b61866927eef02e466b1b008bf031",
"0x79bc2c1c5503b0533771f691a680ba304954fc1664604c6d9d809057a9ccde24",
"0x8a2353ad6ab64042d2ae64f98d91106e5865dd5020332685bb4a52047ab1c70a",
"0x70e451244f267596964745ede4646e490d24219897967db11d6dc8eb23e4c8c4"
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
            version: '^0.5.11'
        }
    }
};
