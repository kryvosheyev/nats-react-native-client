# nats-react-native-client
this is a React Native client  nats.ws  for connecting to nats-server.

After unsuccessful attempts, we asked for help in https://natsio.slack.com
This purpose of this repository is to find a solution.

After the issue is solved, this repository will be updated with working code and will remain public for anyone to use it.

05 April 2021: still no success. Keep on trying


Steps to reproduce:
1. Run: ```npm install```
2. Run:  ```adb reverse tcp:9222 tcp:9222```
3. Run:  ```./nats-server -c nontls.conf```
4. Run: ```npm start```
5. Run android

Problems: 
1. Missing  TextEncoder (installed text-encoding-polyfill)
2. Error in wsUrlParseFn - get not implemented - (installed react-native-url-polyfill)
3. message appears:  reader closed [TypeError: Invalid attemt to iterate non-iterable instance. ...] (added Symbol.iterator method to ws-transport.ts)
4. NatsError: TIMEOUT - unsolved

Nats.js and nats-server were built with nats.ws:
1. ```git clone https://github.com/nats-io/nats.ws.git```

   // cjs files are not supported in React Native, so we build js file
2. ```npm run build-esm```
3. ```npm run install-ns```
