# react-native-stellar-base

This package polyfills the [stellar-base](https://github.com/stellar/js-stellar-base) for React Native.

It includes native randomBytes for iOS and Android via [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes).

Due to the asynchronous nature of React Native's native bridge, this package adds a new asynchronous method to the Stellar Keypair utility `randomAsync` which returns a promise that resolves to the new randomly generated Keypair.

This polyfill is needed because the Stellar SDK was in its core meant for NodeJS environment and relies on the NodeJS crypto api's for it. If you only need the most basic functionalities of Stellar like generating keypairs, creating transactios, signing transactions etc. this library will suffice. If you need more than this, you will probably need to use rn-nodeify to simulate a node environment in your app. However, this is not recommended since it is _really_ big.

## Dependencies

-   [React Native RandomBytes](https://www.npmjs.com/package/react-native-randombytes)
-   [eventsource](https://www.npmjs.com/package/eventsource)

## Installation

To install, add this to your `package.json`:

```
{
    "react-native-stellar-base": "github.url"
}
```

Then, run `npm install` or `yarn`.

## Usage

```javascript
import { Keypair } from "react-native-stellar-base";

const keypair = await Keypair.randomAsync();
const publicKey = keypair.publicKey();
const secretKey = keypair.secret();
```
