const ShareDB = require('sharedb')
const WebSocket = require('ws')
const WebSocketJSONStream = require('websocket-json-stream')

const share = new ShareDB()

function createServer () {
  const ws = new WebSocket.Server({
    port: 9515
  })
  ws.on('connection', (ws, req) => {
    share.listen(new WebSocketJSONStream(ws))
  })
}

createServer()
