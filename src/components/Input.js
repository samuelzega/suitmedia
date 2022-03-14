import React from 'react';
import {TextInput} from 'react-native';
import {Dimension} from '../styles';

export default function Input({
  value,
  placeholder,
  onChangeText,
  customStyles,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      placeholder={placeholder}
      style={{
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 15,
        width: Dimension.width * 0.8,
        ...customStyles,
      }}
    />
  );
}
