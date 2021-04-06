import { connect, JSONCodec } from './nats';


const connectNats = async (config) => {
  
  // this commented code works, its purpose is to make sure that we can connect to local nats-server, using usual WebSocket
  // const socket = new WebSocket('ws://localhost:9222')
  // socket.onopen = () => {console.log('connected')};
  
  
  // but if we try to connect using wats.js, it fails
  // ERROR happens at this line
  const nc = await connect({       
    servers: "ws://localhost:9223",
    ignoreClusterUpdates: true,
  });

  
  // we never get to this line
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
