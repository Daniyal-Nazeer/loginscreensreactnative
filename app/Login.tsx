import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const InputWithIcon = ({ icon, placeholder, value, onChangeText, secureTextEntry }) => (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to SO</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.signinText}> Login or Sign up to access your account </Text>
      </View>

      <View style={styles.ParentView}>
        <AntDesign name="google" size={24} color="black" />
        <Text>Continue with Google</Text>
      </View>

      <View style={styles.ParentView}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text>Continue with Apple</Text>
      </View>

      <SafeAreaView style={styles.InputContainer}>
        <InputWithIcon
          icon={<AntDesign name="mail" size={24} color="gray" />}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
        <InputWithIcon
          icon={<FontAwesome name="lock" size={24} color="gray" />}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => { navigation.navigate('exploreNow') }} style={styles.btnContainer}>
          <Text style={styles.submitBtn}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Text style={styles.desc}>By signing up, you agree to the Terms of Service and 
      Privacy Policy, including Cookie Use.</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0ECF3',
  },
  heading: {
    paddingHorizontal: 20,
    fontSize: 38,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 20,
  },
  signinText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '90%',
    alignSelf: 'center',
    margin: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal:16
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  InputContainer: {
    marginTop: 20,
  },
  submitBtn: {
    backgroundColor: '#0098FF',
    color: '#fff',
    padding: 20,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 21,
    fontWeight: '500',
    alignSelf:'center'
  },
  btnContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
  },
  ParentView: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  desc:{
    paddingHorizontal:20,
    fontSize:14,
    fontWeight:'400',
    marginTop:40,
    alignSelf:'center',
    lineHeight:24
    
  }
});
