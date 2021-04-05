# nats-react-native-client
this is a React Native client  nats.ws  for connecting to nats-server.

After unsuccessful attempts, we asked for help in https://natsio.slack.com
This purpose of this repository is to find a solution.

After the issue is solved, this repository will be updated with working code and will remain public for anyone to use it.

05 April 2021: still no success. Keep on trying

Steps to reproduce:
1. Run adb reverse tcp:9222 tcp:9222 and run-android
2. Run  ./nats-server -c ./examples/nontls.conf

Problems: 
1. Missing  TextEncoder ( install text-encoding-polyfill)
2. Error in wsUrlParseFn - get not implemented - (install react-native-url-polyfill)
3. message appears:  reader closed [TypeError: Invalid attemt to iterate non-iterable instance. ...] -> NatsError: DISCONNECT 
( nats.js: 2309 )
