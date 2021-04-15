## NATS React Native Guide

# Description
This repo contains a guide for installing NATS to your React Native project and an example of working NATS RN client.
Client was built with [nats.ws](https://github.com/nats-io/nats.ws).

# Table Of Contents
1. Installation of nats.ws into your React Native project.
2. Installation of example App.
3. Problems we have encountered.



# Installation of nats.ws into your React Native project

Here are the steps:

### nats.ws
```
# clone nats.ws repository:
git clone https://github.com/nats-io/nats.ws.git

# cjs files are not supported in React Native, so we build js file
# build nats.js:
npm run build-esm

# copy nats.js into your repo and
# place it where you can reference it from your code
```
### URL (get method missing) and TextEncoder polyfills
```
# install text-encoding-polyfill and
# react-native-url-polyfill into your project:
npm install text-encoding-polyfill
npm install  react-native-url-polyfill

# add imports into your root component
import 'text-encoding-polyfill';
import 'react-native-url-polyfill/auto';
```
### asyncIterators realisation 
```
# install babel-plugin-transform-async-generator-functions
npm install --save-dev babel-plugin-transform-async-generator-functions

# add "@babel/plugin-syntax-async-generators" into your babel config
plugins: [
      "@babel/plugin-syntax-async-generators",
]
```
Rewrite `for await of` with async generators in nats.js file.
```
for (
 let iter = iterableData[Symbol.asyncIterator](), step = await iter.next();
 !step.done;
 step = await iter.next()
) {
 // your code
 console.log(step.value.data);
}
``` 


# Installation of the example App
Steps to install:
```
# in App folder
# install modules
npm install

# open ports in your android simulator
adb reverse tcp:9222 tcp:9222

# start nats-server 
./nats-server -c nontls.conf

# and run your project in Android Emulator
```


# Problems we have encountered
- [x] Missing  TextEncoder
- [x] Error in wsUrlParseFn - get not implemented - (installed react-native-url-polyfill)
- [x] message appears:  reader closed [TypeError: Invalid attemt to iterate non-iterable instance. ...] (installed babel-plugin-transform-async-generator-functions)


After unsuccessful attempts, we asked for help in https://natsio.slack.com. Thanks @aricart for your help.


