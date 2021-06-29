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

import LoginScreen from './LoginScreen';
import MyHeader from '../components/MyHeader';
import HomeScreen from './HomeScreen';
import DoneButton from '../components/DoneButton';

export default class HomeworkScreen extends Component {


    eng=async()=>{
        var url='https://classroom.google.com/u/1/w/MzUwMjIyMDgzOTIw/t/all';
        Linking.openURL(url);
        

      }

      maths=async()=>{
        var url='https://classroom.google.com/u/1/w/MzU3NzQyNzAwNDU3/t/all';
        Linking.openURL(url);
      }

      hindi=async()=>{
        var url='https://classroom.google.com/u/1/w/MzU3Njk3NTkxMjgz/t/all';
        Linking.openURL(url);
      }

      marathi=async()=>{
        var url='https://classroom.google.com/u/1/w/MzU3NzIyMjE4ODIz/t/all';
        Linking.openURL(url);
      }

      science=async()=>{
        var url='https://classroom.google.com/u/1/w/MzU3Njg0Mzk2NDUx/t/all';
        Linking.openURL(url);
      }

      getTodaysDate(){
          var today= new Date()
          var day= today.getDate()
          var month= today.getMonth()+1
          var year= today.getFullYear()
          today= day+'/'+month+'/'+year
          return today
      }


    render(){
        return(
           
            <View style={{
                flex:2,
                fontSize: 30,
                justifyContent:'center',
                alignItems:'center'
              }}>
                  
                  <View style={{flex:1}}>
            <MyHeader title="Student Assistant App" />

            <View>
                <Text> Date: </Text>
                <Text> {this.getTodaysDate()} </Text>
            </View>

            </View>

            <View style={{
            flex:2,
            fontSize: 30,
            justifyContent:'center',
            alignItems:'center'
            }}>

                

            <TouchableOpacity
                style={styles.button}
                onPress={this.eng}>
                <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>

            <DoneButton buttonIndex={0}/>

            <TouchableOpacity
                style={styles.button}
                onPress={this.maths}>
                <Text style={styles.buttonText}>Maths</Text>
            </TouchableOpacity>
            <DoneButton />
            
            <TouchableOpacity
                style={styles.button}
                onPress={this.hindi}>
                <Text style={styles.buttonText}>Hindi</Text>
            </TouchableOpacity>
            <DoneButton />
            

            <TouchableOpacity
                style={styles.button}
                onPress={this.marathi}>
                <Text style={styles.buttonText}>Marathi</Text>
            </TouchableOpacity>
            <DoneButton />
            

            <TouchableOpacity
                style={styles.button}
                onPress={this.science}>
                <Text style={styles.buttonText}>Science</Text>
            </TouchableOpacity>
            <DoneButton />
            

 
            
            </View>
              
            
                <Text>homework screen</Text>
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
      backgroundColor:"#00ffdd",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    },
    buttonText: {
      color: "#aa00ff",
      fontWeight: "200",
      fontSize: 20
    },
    grid:{
      marginLeft:10,
      marginTop: 175
    }
  })
