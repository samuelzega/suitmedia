import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button} from '../components';
import {Font, Dimension} from '../styles';
import {UserContext} from '../hooks';

export default function Home({navigation}) {
  const {navigate} = navigation;
  const [userState, userDispatch] = useContext(UserContext);
  return (
    <View style={{flex: 1}}>
      <Header title="Header" />
      <View style={styles.body}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.welcomeName}>John Doe</Text>
        </View>
        <View style={styles.userBox}>
          <Image
            style={styles.image}
            source={
              userState.myDetail
                ? {uri: userState.myDetail.avatar}
                : require('../assets/icon/profile.png')
            }
          />
          {userState.myDetail ? (
            <View style={styles.detailBox}>
              <Text style={styles.selectedName}>
                {userState.myDetail.first_name} {userState.myDetail.last_name}
              </Text>
              <Text style={styles.selectuser}>{userState.myDetail.email}</Text>

              <Text onPress={() => navigate('Webview')} style={styles.website}>
                website
              </Text>
            </View>
          ) : (
            <Text style={styles.selectuser}>
              Select a user to show the profile
            </Text>
          )}
        </View>
        <Button onPress={() => navigate('User')} title="Choose a User" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  welcome: {
    fontFamily: Font.Regular,
    fontSize: 12,
    color: '#04021D',
  },
  welcomeName: {
    fontFamily: Font.SemiBold,
    fontSize: 18,
    color: '#04021D',
  },
  image: {
    width: Dimension.width * 0.35,
    height: Dimension.width * 0.35,
    borderRadius: Dimension.width * 0.35,
  },
  userBox: {
    alignItems: 'center',
    marginTop: -Dimension.height * 0.1,
  },
  selectuser: {
    marginTop: 20,
    fontFamily: Font.Regular,
    fontSize: 18,
    color: '#808080',
  },
  detailBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  selectedName: {
    fontFamily: Font.Regular,
    fontSize: 24,
    marginBottom: -22,
  },
  website: {
    color: '#2B637B',
    textDecorationLine: 'underline',
    fontFamily: Font.Regular,
  },
});
