/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react'
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native'
import NavigatorScreen from './Screens/NavigatorScreen'
import CustDetails from './Screens/CustDetails'
import Home from './Screens/Home'

export default function App (){
  return(
   <NavigatorScreen/>
  )
}
/* export default function App(){

  const[visible,setVisible] = useState(true) 

  const hideSplashScreen = ()=>{
    setVisible(false)
  }


 useEffect(()=>{

    var that = this;
    setTimeout(function(){
      hideSplashScreen();
    },5000)
  }) 

  let Splash_Screen = (  
    <View style={styles.SplashScreen_RootView}>  
        <View style={styles.SplashScreen_ChildView}>  
              <Image source={require("./Screens/asset/logo.png")}  
           style={{width:300, height:260, resizeMode: 'cover',borderRadius:20}} />  
       </View>  
    </View> )  

  return(
   
    
   <View style = { styles.MainContainer }>  
    <NavigatorScreen />
    {  
     (visible == true) ? Splash_Screen : null  
   }  
</View>   
  )
}

const styles = StyleSheet.create(  
  {  
      MainContainer:  
      {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center',  
         
        //  paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
      },  
     
      SplashScreen_RootView:  
      {  
          justifyContent: 'center',  
          flex:1,  
          margin: 10,  
          position: 'absolute',  
          width: '100%',  
          height: '100%',  
        },  
     
      SplashScreen_ChildView:  
      {  
          justifyContent: 'center',  
          alignItems: 'center',  
         backgroundColor: '#00BCD4',  
          flex:1,  
      },  
  }); */