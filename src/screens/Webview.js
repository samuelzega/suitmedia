import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '../components';

import {WebView} from 'react-native-webview';

export default function Webview() {
  return (
    <View style={styles.container}>
      <Header title="Header" />
      <View style={styles.webviewBox}>
        <WebView
          source={{uri: 'https://suitmedia.com'}}
          scrollEnabled
          style={styles.webView}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webviewBox: {
    padding: 16,
    flex: 1,
  },
  webView: {
    width: '100%',
  },
});
