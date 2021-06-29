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

export default class DoneButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          index:''
        };
      }

      render(){
          return(

            <View style={{
                flex:2,
                fontSize: 30,
                justifyContent:'center',
                alignItems:'center'
                }}>
    
                <TouchableOpacity
                    style={this.props.buttonIndex===this.state.index
                    ?[styles.button,{backgroundColor:'green'}]
                :[styles.button,{backgroundColor:'red'}]}
                   onPress={()=>{this.setState({index:this.props.buttonIndex})}} >
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
                
                </View>
          )
      }
}


const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:120,
      height:30,
      marginBottom:50,
      justifyContent:'center',
      alignItems:'center',
     
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    },
    buttonText: {
      color: "#ffffff",
      fontWeight: "200",
      fontSize: 20
    },
    grid:{
      marginLeft:10,
      marginTop: 170
    }
  })
