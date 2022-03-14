import {Dimensions, StatusBar, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const screenSize = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('window').height - statusBarHeight,
  statusBarHeight,
  // screenPadding: 16,
  // screenMargin: 16,
  // cardPadding: 16,
  // cardMargin: 16,
};

export default screenSize;
