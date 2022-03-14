import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {Input, LoginBg, Button} from '../components';
import palindromChecker from '../helpers/palindromChecker';
import {Dimension} from '../styles';

export default function Login({route, navigation}) {
  const {navigate} = navigation;
  const [name, setName] = useState('');
  const [palindrome, setPalindrome] = useState('');

  const check = () => {
    if (palindromChecker(palindrome)) {
      Alert.alert(
        `isPalindrome`,
        `its palindrome`,
        [
          {
            text: 'oke',
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        `isPalindrome`,
        `not palindrome`,
        [
          {
            text: 'oke',
          },
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <View style={styles.conatiner}>
      <LoginBg />
      <Image
        source={require('../assets/icon/adduser.png')}
        style={styles.image}
      />
      <Input value={name} onChangeText={setName} placeholder="Name" />
      <Input
        value={palindrome}
        onChangeText={setPalindrome}
        placeholder="Polindrome"
        customStyles={{marginBottom: 50}}
      />
      <Button onPress={() => check()} title="CHECK" />
      <Button title="NEXT" onPress={() => navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimension.width * 0.3,
    height: Dimension.width * 0.3,
    marginBottom: 30,
  },
});
