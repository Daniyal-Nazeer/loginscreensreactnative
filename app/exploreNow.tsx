import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';
 

const exploreNow = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore now</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.signinText}> Join SO today. </Text>
        
      </View>


        <View style={styles.ParentView}>
        <AntDesign name="google" size={24} color="black" />
        <Text>Continue with Google</Text>
        </View>

        <View style={styles.ParentView}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text>Continue with Apple</Text>
        </View>
      
        <TouchableOpacity onPress={() => { navigation.navigate('exploreNow')}} style={styles.btnContainer}>
          <Text style={styles.submitBtn}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.loginText}>Already have an account?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Login')}} style={styles.btnContainer}>
          <Text style={styles.signtBtn}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.desc}>By signing up, you agree to the Terms of Service and 
             Privacy Policy, including Cookie Use.</Text>

    </View>
  )
}

export default exploreNow

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0ECF3'
  },
  heading: {
    paddingHorizontal: 20,
    fontSize: 46,
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
    fontSize: 26,
    fontWeight: '700'
  },
  loginText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal:20,
    marginTop:20
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
    backgroundColor:'#0098FF',
    color:'#fff',
    padding:20,
    width:'90%',
    textAlign:'center',
    borderRadius:30,  
    fontSize:21,
    fontWeight:'500'
     
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'center',
    paddingHorizontal:16,
    marginTop:40
  },
  ParentView:{
    flexDirection:'row',
    gap:12,
    paddingHorizontal:20,
    marginTop:20,
    alignItems:'center',
    backgroundColor:'#fff',
    padding:15,
    width:'86%',
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
  },
  signtBtn:{
    backgroundColor:'transparent',
    color:'#0098FF',
    padding:20,
    width:'90%',
    textAlign:'center',
    borderRadius:30,  
    fontSize:16,
    fontWeight:'500',
    borderWidth:1,
    borderColor:'gray'
  },
  desc:{
    paddingHorizontal:20,
    fontSize:14,
    fontWeight:'400',
    marginTop:100,
    
  }
})