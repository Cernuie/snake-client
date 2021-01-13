const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server.");
  })
  conn.on('connect', (connect) => {
    conn.write("Name: AN");
  });
  conn.on('connect', (connect) => {
    conn.write("Move: up");
  })

  return conn;

}

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)



module.exports = connect;