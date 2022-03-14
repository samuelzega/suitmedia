import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Font, Dimension} from '../styles';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: Dimension.width * 0.8,
        backgroundColor: '#2B637B',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        alignSelf: 'center',
      }}
      onPress={onPress}>
      <Text style={{fontFamily: Font.Regular, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
}
