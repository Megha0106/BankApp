import React from 'react'
import {View,Text,ScrollView,Image,StyleSheet,ImageBackground} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import {Button,IconButton} from 'react-native-paper'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Customers from './Customers'



const images = [
 
    "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://cdn.corporatefinanceinstitute.com/assets/mobile-banking-1024x682.jpeg",
    "https://www.wichurches.org/wp-content/uploads/2020/02/money-2724241_1280.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/getty_banking-pfin-apps_030721.jpeg.jpg",
]
export default function  HomeScreen({navigation}) {
    return(
        <View style = {styles.containerStyle}>
             <ImageBackground
            source = {require('./asset/background.jpg')}
            style = {{width:'100%', height:'100%',resizeMode:'cover',flex:1}}
            > 
           
             <SliderBox
                images={images}
                sliderBoxHeight={400}
                
              
                dotColor="#f536b8"
                inactiveDotColor="#90A4AE"
                
                autoplay
                autoplayInterval={5000}
                circleLoop
                />
                <Image
                    source = {require('./asset/MSSLogo.png')}
                    style = {{width:300,height:300,alignSelf:'center',marginTop:-400}}
                />
               
                <Button style = {styles.btnStyle} mode = "contained" icon = "account-multiple" labelStyle = {{fontSize:35}}
                onPress = {()=>navigation.navigate("Customers")}
                >
                    <Text style = {{fontSize:20}}>All Customers</Text>
                   {/*  <Icon name = "account-multiple" size = {30} color = {'#fff'}/> */}
                </Button> 
                 
                <View style = {styles.subViewStyle}>
                    <Ionicon name = "information-circle" color = "#fff" size={30}/>
                    <Text style = {{fontSize:20,marginLeft:5,fontWeight:"bold",color:"#fff"}}>
                    About Admin
                    </Text>
                </View>
               
        </ImageBackground>    
        </View>
       
    )
    
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        alignItems:'center',
        
     backgroundColor:"#b9dcf0"
    },
    welcomeStyle:{
        color:"#fff",
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        alignSelf:'center',
        fontStyle:"italic",
        textDecorationLine: 'underline',
    },
    imgStyle:{
        width:500,
        height:200,
        alignSelf:'center',
        resizeMode :'cover'
    },
    btnStyle:{
        backgroundColor:"#0000ff",
        marginTop:200,
        marginHorizontal:50,
        height:60,
        alignItems:'center',
        justifyContent:'center',
       // borderRadius:50,
      borderColor:'blue',
      // borderWidth:0.5
    },
    btnTextStyle:{
        fontSize:30,
    },
    subViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:100
    },
   
})