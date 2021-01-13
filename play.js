const net = require('net');
const { IP, PORT } = require("./constants");
/**
 * Establishes connection with the game server
 */
const connect = require('./client');
const setupInput = require('./input');
console.log('Connecting ...');
setupInput(connect(IP, PORT));
