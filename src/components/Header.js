import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Font, Dimension} from '../styles';
import {goBack} from '../routes/RootNavigation';

export default function Header({title, RightComponent}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Image
          style={styles.backIcon}
          source={require('../assets/icon/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.rightComponentBox}>
        {RightComponent && <RightComponent styles={styles.rightComponent} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomColor: '#E2E3E4',
    borderBottomWidth: 1.5,
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  title: {
    fontFamily: Font.SemiBold,
    color: '#2B637B',
    fontSize: 18,
  },
});
