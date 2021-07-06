import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config.js';
import AppHeader from '../AppHeader'

export default class TransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
            title: '',
            author:'',
            story:'',
      }
    }

    initiateBookIssue= async()=>{
      db.collection("stories").add({
        'storyTitle':this.state.title,
        'author': this.state.author,
        'story':this.state.story,
      })
      //change the book status
      
      alert("story published")

      this.setState({
        title: '',
        author:'',
        story:'',
      })
      

      
    }

 
    render() {
      return(
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <AppHeader/>
    
      <View style={styles.inputView}>
      <TextInput 
        style={styles.inputBox}
        placeholder="  Story Title"
        onChangeText={text=> this.setState({title:text})}
        value={this.state.title}/>
      </View>
      <View style={styles.inputView}>
      <TextInput 
        style={styles.inputBox}
        placeholder="  Author"
        onChangeText={text=> this.setState({author:text})}
        value={this.state.author}/>
      </View>
      <View style={styles.inputView}>
      <TextInput 
        multiline={true}
        style={styles.inputBox2}
        placeholder="  Write Story"
        onChangeText={text=> this.setState({story:text})}
        value={this.state.story}/>
      </View>
      <TouchableOpacity
      style = {styles.submitButton}
      onPress={async()=>{this.initiateBookIssue()}}>
        <Text style= {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>

      )
      }     
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 7
    },
    inputBox:{
      width: 300,
      height: 20,
      borderWidth: 1.5,
      borderRightWidth: 1,
      marginBottom:5,
      marginTop:5,
      fontSize: 10,
    },
    inputBox2:{
      width: 300,
      height: 200,
      borderWidth: 1.5,
      borderRightWidth: 1,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor: '#F8C820',
      width:80,
      height:30
    },
    submitButtonText:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
  });
