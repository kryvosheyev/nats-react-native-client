import { connect, JSONCodec } from './nats';


const connectNats = async (config) => {

  // ERROR happens at this line
  const nc = await connect({       
    servers: "ws://localhost:9222",
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
