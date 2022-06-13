import App from '@/src/App';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Remote debugger is in a background']);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
