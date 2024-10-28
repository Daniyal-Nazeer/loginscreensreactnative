import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';
 

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPasword] = React.useState('');
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <Text style={styles.heading}>Sign in</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.signinText}> New user? </Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.loginText}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={setPasword}
          value={password}
          placeholder="Password"
        /> */}

        <TouchableOpacity onPress={() => { navigation.navigate('exploreNow')}} style={styles.btnContainer}>
          <Text style={styles.submitBtn}>Continue</Text>
        </TouchableOpacity>

      </SafeAreaView>

      
        <View style={styles.ParentView}>
        <AntDesign name="google" size={24} color="black" />
        <Text>Continue with Google</Text>
        </View>

        <View style={styles.ParentView}>
        <Entypo name="facebook-with-circle" size={24} color="black" />
        <Text>Continue with Facebook</Text>
        </View>

        <View style={styles.ParentView}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text>Continue with Apple</Text>
        </View>
      
      <Image source={require('../assets/images/1.png')} style={styles.ProfileImage}/>


    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ecf3'
  },
  heading: {
    marginTop: 60,
    paddingHorizontal: 20,
    fontSize: 26,
    fontWeight: 'bold'
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 20
  },
  signinText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400'
  },
  loginText: {
    color: '#0098FF',
    fontSize: 16,
    fontWeight: '500'
  },
  input: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    margin: 14,
    borderBottomWidth: 1,
    padding: 10,
  },
  InputContainer: {
    marginTop: 20
  },
  submitBtn:{
    backgroundColor:'#000',
    color:'#fff',
    padding:12,
    width:'50%',
    textAlign:'center',
    borderRadius:10,  
    fontSize:16,
    fontWeight:'500'
     
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingHorizontal:16,
    marginTop:10
  },
  ParentView:{
    flexDirection:'row',
    gap:12,
    paddingHorizontal:20,
    marginTop:25,
    alignItems:'center',
    backgroundColor:'#fff',
    padding:15,
    width:'85%',
    alignSelf:'center',
    borderRadius:30,
    justifyContent:'center'
  },
  ProfileImage:{
    width: 150,
    height:200,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  }
})