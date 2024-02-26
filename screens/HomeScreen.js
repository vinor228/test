import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  const {name, token} = route.params;

  useEffect(() => {
    if (!token) {
      navigation.navigate('Login');
    }
  }, [token, navigation]);

  return (
    <View style={styles.container}>
      {console.log(name, 'name')}
      <Text>{`Hi ${name}, you're logged in.`}</Text>
      <Button
        title="Logout"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
