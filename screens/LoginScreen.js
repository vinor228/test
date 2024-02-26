import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const LoginScreen = ({navigation, route}) => {
  const [mockUserData, setMockUserData] = useState(
    [
      {
        username: route.params?.username,
        password: route.params?.password,
        name: route.params?.name,
      },
    ] || [],
  );

  const [username, setUsername] = useState(route.params?.username || '');
  const [password, setPassword] = useState(route.params?.password || '');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    const user = mockUserData.find(
      user => user.username === username && user.password === password,
    );

    if (user) {
      console.log(user.name, 'user.name');
      const fakeToken = 'fake.jwt.token';

      navigation.navigate('Home', {name: user.name, token: fakeToken});
    } else {
      setLoginMessage('Authentication failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {/* <Text>{loginMessage}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
