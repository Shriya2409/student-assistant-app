import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Linking,
} from "react-native";

import db from "../config";
import firebase from "firebase";

import HomeScreen from './HomeScreen';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email_id: "",
      password: "",
      name: "",
      roll_no: "",
      class: "",
      school_name:"",
      confirm_password:"",
      isModalVisible:false
    };
  }

  componentDidMount(){
    console.log(this.state.isModalVisible)
    this.showModal()
  }

  showModal=()=>{
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.isModalVisible}
      >
        {console.log(this.state.isModalVisible)}
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: "100%" }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Name"}
                maxLength={20}
                onChangeText={text => {
                  this.setState({
                    name: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"class"}
                maxLength={8}
                onChangeText={text => {
                  this.setState({
                    class: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Roll no"}
                maxLength={3}
                keyboardType={"numeric"}
                onChangeText={text => {
                  this.setState({
                    roll_no: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"school name"}
                multiline={true}
                onChangeText={text => {
                  this.setState({
                    school_name: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"email id"}
                keyboardType={"email-address"}
                onChangeText={text => {
                  this.setState({
                    email_id: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    password: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Confrim Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    confirm_password: text
                  });
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.email_id,
                      this.state.password,
                      this.state.confirm_password
                    )
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}
                >
                  <Text style={{ color: "#ff5722" }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  }

  userSignUp = (email_id, password) => {
    firebase.auth().createUserWithEmailAndPassword(email_id, password)
    .then(() => {
        db.collection("users").add({
        name: this.state.name,
        class: this.state.class,
        rollNumber: this.state.roll_no,
        schoolName: this.state.school_name,
        emailId: this.state.email_id,
        });

        return Alert.alert("User Added Successfully", "", [
          {
            text: "OK",
            onPress: () => this.setState({ isModalVisible: false })
          }
        ]);
    })

    
    .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    });
    
  };

  userLogin = (email_id, password) => {
    
    firebase.auth().signInWithEmailAndPassword(email_id, password)
    .then(() => {
        this.props.navigation.navigate("Home");
    })
    
    .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    });
  };

  render(){
      return(
        
          <View style={{
            flex:1,
            fontSize: 20,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <View>
            {this.showModal()}
            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={text => {
              this.setState({
                email_id: text
              });
            }}
          />

<TextInput
            style={styles.loginBox}
            placeholder="enter password"
            keyboardType="password"
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />
            </View>
            <View> 
            <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            {console.log(this.state.isModalVisible)}
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.email_id, this.state.password);
            }}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
            </View>

            
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BE85",
    alignItems: "center",
    justifyContent: "center"
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#ff3d00"
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#ff5722",
    margin: 50
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#aa00ff",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  registerButtonText: {
    color: "#ff5722",
    fontSize: 15,
    fontWeight: "bold"
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#aa00ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20
  }
})