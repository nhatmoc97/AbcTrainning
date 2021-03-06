/*
 *nhatnv@abcsoft.vn
 */

import React, {useState, createRef} from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Images} from 'src/assets';
import {styles} from './styles';

export const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const userNameRef = createRef<TextInput>();
  const passWordRef = createRef<TextInput>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 14,
          }}>
          <View style={{paddingTop: Dimensions.get('window').width / 3}}>
            <Image source={Images.LoGo.SignLogo} style={styles.image} />
          </View>
          <View
            style={{
              paddingVertical: (Dimensions.get('window').width / 2) * 0.3,
              alignItems: 'center',
            }}>
            <View style={styles.contentContainer}>
              <Text style={styles.textSignIn}>SIGN IN</Text>
              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.ICUser} />
                </View>
                <TextInput
                  ref={userNameRef}
                  value={userName}
                  onChangeText={(text) => setUserName(text)}
                  placeholder={'Username'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => passWordRef.current?.focus()}
                  returnKeyType={'next'}
                />
              </View>
              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.IcLog} />
                </View>
                <TextInput
                  ref={passWordRef}
                  value={passWord}
                  onChangeText={(text) => setPassWord(text)}
                  placeholder={'Password'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => Keyboard.dismiss()}
                  secureTextEntry={true}
                  returnKeyType={'done'}
                />
              </View>

              <TouchableOpacity style={{marginTop: 59}}>
                <Text style={styles.textForgotYourPassword}>
                  Forget your password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSubmit}>
                <Text
                  style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}></View>
          </View>
          <View>
            <View style={styles.bottomText}>
              <Text style={styles.dontAccText}>Don’t have an account?</Text>
              <Text style={styles.signUpText} onPress={() => {}}>
                Sign up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
