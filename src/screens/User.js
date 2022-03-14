import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import getUsersService from '../services/getUser';
import {UserContext} from '../hooks';
import {Header, Button} from '../components';
import {Font} from '../styles';

export default function User({navigation}) {
  const {navigate} = navigation;
  const [userState, userDispatch] = useContext(UserContext);
  useEffect(() => {
    getUsers();
  }, []);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const setMyUser = user => {
    userDispatch({
      type: 'SET_MY_DETAIL',
      payload: user,
    });
    navigate('Home');
  };

  const getUsers = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await getUsersService({page});
        // console.log(response.data, '============');
        let returnData = response.data;
        if (page == 1) {
          const otherResponse = await getUsersService({page: page + 1});
          returnData = [...returnData, ...otherResponse.data];
        }
        userDispatch({
          type: 'ADD_USERS',
          payload: returnData,
        });
        setLoading(false);
        let addPage = page == 1 ? 2 : 1;

        setPage(page + addPage);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View>
      <Header
        title="Users"
        RightComponent={() => (
          <Image
            style={styles.locationImage}
            source={require('../assets/icon/location.png')}
          />
        )}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={userState.users}
        keyExtractor={(item, index) => index.toString()}
        style={{padding: 16}}
        onEndReachedThreshold={0.5}
        scrollEnabled={true}
        onMomentumScrollEnd={() => getUsers()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setMyUser(item)}
              style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.avatar}} />
              <View style={styles.cardRight}>
                <Text style={styles.name}>
                  {item.first_name} {item.last_name}
                </Text>

                <Text style={styles.email}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{margin: 35}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  locationImage: {
    width: 17,
    height: 17,
    resizeMode: 'center',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomColor: '#E2E3E4',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: 'center',
  },
  cardRight: {
    marginLeft: 16,
  },
  name: {
    fontFamily: Font.Medium,
    fontSize: 16,
  },
  email: {
    fontFamily: Font.Medium,
    fontSize: 10,
  },
});
