import React from 'react';
import {Image} from 'react-native';
import {Dimension} from '../styles';

export default function LoginBg() {
  return (
    <Image
      source={require('../assets/background/login.png')}
      style={{
        position: 'absolute',
        width: Dimension.width,
        height: Dimension.height,
      }}
    />
  );
}
