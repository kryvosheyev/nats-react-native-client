import { connect, JSONCodec } from './nats';


const connectNats = async (config) => {


  // websocket creates properly to nats-server

  // const socket = new WebSocket('ws://localhost:9222')
  // socket.onopen = () => {console.log('connected')};

  // socket.onerror = e => {
  //   // an error occurred
  //   console.log(e.message);
  // };
  
  // socket.onclose = e => {
  //   // connection closed
  //   console.log(e.code, e.reason);
  // };


  // nats could not connect to nats-server

  const nc = await connect({       
    servers: "ws://localhost:9222",
    ignoreClusterUpdates: true,
  });
  console.log('CONNECTED', nc.getServer())
  const done = nc.closed();
    // do something with the connection

    // close the connection
    await nc.close();
    // check if the close was OK
    const err = await done;
    if (err) {
      console.log(`error closing:`, err);
    }
}

export default connectNats;