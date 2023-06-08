/**
 * GLOBAL
 */

// main: 'main', signet/testnet: 'tb'
let encodedAddressPrefix = "main";

// mainnet: '', 'signet/', 'testnet/'
let mempoolNetwork = "";

/**
 * INSCRIPTIONS
 */

// default padding as of ord native wallet
let padding = 10000;

// signet
//let tippingAddress = 'tb1pkjs7aww5m2muw5jpfxfrs4849dyjtp7camnqymlxt5mwmzy440xqe864rg';

// main
let tippingAddress = String.fromCharCode(
  ...[
    98, 99, 49, 112, 48, 54, 118, 55, 50, 104, 48, 116, 51, 109, 102, 103, 53, 109, 108, 121, 100, 116, 54, 52, 113, 54,
    102, 114, 104, 50, 110, 101, 53, 117, 113, 48, 57, 57, 110, 102, 116, 106, 53, 100, 51, 57, 55, 97, 51, 106, 118,
    118, 97, 54, 54, 113, 110, 113, 114, 53, 50, 120,
  ]
);

// enabled plugins (appear in 'special' if any)
let plugins = [
  // {
  //     name : 'orc20deploy',
  //     file : 'orc20deploy.1.0.0.js',
  //     instance : null
  // },
  // {
  //     name : 'orc20mint',
  //     file : 'orc20mint.1.0.0.js',
  //     instance : null
  // },
  // {
  //     name : 'satsresolver',
  //     file : 'satsresolver.1.0.0.js',
  //     instance : null
  // },
  // {
  //     name : 'byteperfectevm',
  //     file : 'byteperfectevm.1.0.1.js',
  //     instance : null
  // },
  // {
  //     name : 'byteperfectsol',
  //     file : 'byteperfectsol.1.0.0.js',
  //     instance : null
  // },
  // {
  //     name : 'loot',
  //     file : 'loot.1.0.3.js',
  //     instance : null
  // }
];
