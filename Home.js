import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,Image,ImageBackground,Alert,TouchableOpacity,TextInput} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
  render() {
    return (
     
  <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
    
        <View style={styles.cc}>
        <Image source={require('./assets/image/elderly.png')} style={styles.img}/>

          <Text style={styles.titlehome}>WELCOME</Text>
      


  <TouchableOpacity  style={styles.button }     onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Back',
            });
          }}><Text style={styles.text1 } >Start</Text></TouchableOpacity>
  
        </View>
  </ImageBackground>
     
    )
  }
}
class MainScreen extends React.Component{
 
  HandleLogout = () => {
    this.props.navigation.goBack()
  }
 
  render(){
    return(
      <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
                <View style={styles.mainblox}>
                  <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image source={require('./assets/image/pic.png')} style={styles.imgpic}/>
                <Text style={styles.header1}>Your mission for today</Text>
                <Text style={styles.header2}>Healty by with my mission </Text>
                <Image source={require('./assets/image/miniheart.png')} style={styles.imgminiheart}/>
                </View>
                <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}><TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}  style={styles.button2}><Text style={styles.header3 } >Next</Text></TouchableOpacity>
                </View>
                </View>
                <Text style={{flex:1}}></Text>
            </ImageBackground>
    
    )
  }
}


class DetailsScreen extends React.Component {
  constructor(){
    super()
    this.state = {id:'',pw:''}
  }
  
  HandleonLogin = () => {
    switch (this.state.id) {
      case "admin":
        if(this.state.pw === '1234'){
          this.props.navigation.navigate('Main',{role:'Admin'})
        }
        break;
      case "user":
        if(this.state.pw === '9999'){
          this.props.navigation.navigate('Main',{role:'User'})
        }
        break;
      default:
        break;
    }
  }

    static navigationOptions = ({ navigation, navigationOptions }) => {
      console.log(navigationOptions);
      // Notice the logs ^
      // sometimes we call with the default navigationOptions and other times
      // we call this with the previous navigationOptions that were returned from
      // this very function
      return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID'); 
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
        <View style={styles.blox}>
        <Text style={styles.title}> Happy Senior </Text>
        
        <View style={styles.container1}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.textInput} placeholder="Enter username" onChange={(e) =>this.setState({id : e.nativeEvent.text})}/>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textInput} placeholder="Enter password" onChange={(e) =>this.setState({pw : e.nativeEvent.text})}/>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{color: 'red', fontSize: 15}}>Haven't got an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}  style={styles.buttonlogin}><Text style={styles.textlogin } >Login</Text></TouchableOpacity>
        </View>
    </View>
    <Text style={{flex:1}}></Text>
    </ImageBackground>
      );
    }
  }
  
const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    backgroundColor:'pink',
    
  },
  
blox:{
flex:2,
width:500,
marginTop:60,
marginLeft:50,
backgroundColor: 'white',
borderRadius:5,
padding:15
  },
  bloxhead:{
    flex:5,
    backgroundColor: 'red',
    borderRadius:5,
  },
  mainblox:{
    flex:2,
    width:500,
    marginTop:60,
    marginLeft:50,
    backgroundColor: '#8497B0',
    borderRadius:5,
    padding:15
  },
  cc:{
    flex:9,
    alignItems:'center',
    justifyContent: 'center',
  },
  titlehome:{
    fontSize:30,
    color:'white',
    marginTop:10,
    marginBottom:20
  },
  img:{
    width: 320,
    height: 350,
    resizeMode: 'stretch',
  },
  imgminiheart:{
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    marginTop:10
  },
  imgpic:{
    width: 150,
    height: 150,
    borderRadius:500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    padding: 15,
    backgroundColor:'yellow',
    width: 250,
    borderRadius: 15,
  },
  buttonlogin:{
    padding: 5,
    backgroundColor:'green',
    width: 120,
    borderRadius: 10,     
  },
  button2:{
    padding: 5,
    backgroundColor:'#F8FF37',
    width: 120,
    borderRadius: 10,     
  },
  textlogin:{
    color:'white',
    fontSize:25,
    textAlign:'center'
  },
  text1:{
    color:'darkred',
    fontSize:30,
    textAlign:'center'
  },
  container1: {
    marginVertical: 55,
    marginHorizontal: 15
},
title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9d0b0b',
    textAlign:'center'
},
header1: {
  marginTop: 15,
  fontSize: 30,
  fontWeight: 'bold',
  color: '#F8FF37',
  textAlign:'center'
},
header2: {
  marginTop: 15,
  fontSize: 20,
  color: '#D6D7A5',
  textAlign:'center'
},
header3: {
  margin: 15,
  fontSize: 25,
  fontWeight: 'bold',
  color: '#440000',
  textAlign:'center'
},
text: {
    fontSize: 20
},
textInput: {
    marginVertical: 10,
    backgroundColor:'#e3f6f5',
}
})

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Main:MainScreen
      
    },
    {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );
 

const AppContainer = createAppContainer(RootStack);

export default class Home extends React.Component {
  render() {
    return <AppContainer />;
  }
}
