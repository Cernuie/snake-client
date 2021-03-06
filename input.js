const net = require('net');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); 
  const handleUserInput = function () {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      } 
      if (key === 'w') {
        conn.write("Move: up");
      }
      if (key === 'a') {
        conn.write("Move: left");

      }
      if (key === 's') {
        conn.write("Move: down");

      }
      if (key === 'd') {
        conn.write("Move: right");
      }
      if (key === 'q') {
        conn.write("Say: Hello!");
      }
      if (key === 'e') {
        conn.write("Say: I'm growing!");
      }
    })
  }
  handleUserInput();
  return stdin;
} 

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
module.exports = setupInput;