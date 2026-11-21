/**
 * Application entry point registered by React Native.
 *
 * All app logic lives in `App.tsx`; this module only wires the root component
 * to the native `AppRegistry` under the name declared in `app.json`.
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
