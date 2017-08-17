import { AppRegistry } from 'react-native';
import App from './src/App.js';


//Ignore warnings
console.ignoredYellowBox = ['Warning: BackAndroid'];
console.ignoredYellowBox = ['Warning: setState(...)'];
console.disableYellowBox = true;

AppRegistry.registerComponent('managerlatest', () => App);
