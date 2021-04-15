import { connect, JSONCodec } from './nats';


const connectNats = async (config) => {
  const nc = await connect({       
    servers: "ws://localhost:9222",
    ignoreClusterUpdates: true,
  });

  console.log('connected to', nc.getServer())
  const done = nc.closed();

    // close the connection
    // await nc.close();
    // check if the close was OK
    const err = await done;
    if (err) {
      console.log(`error closing:`, err);
    }
}

export default connectNats;
