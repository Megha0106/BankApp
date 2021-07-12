import React ,{useState} from 'react'
import {View,Text,ImageBackground,Image,StyleSheet,Modal,FlatList} from 'react-native'
import { Title,Card,Button } from 'react-native-paper'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import MSIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import NewCust from './NewCust'
import Transaction from './Transaction' 


export default function CustDetails({navigation,route}){

   /*  Receiving data from props */
   const{id, Name, AccNo, Picture,PhoneNo, Balance, Address } = route.params.item


    

    return(
        <View style = {styles.containerStyle}>

             <ImageBackground
            source = {require('./asset/background.jpg')}
            style = {{width:'100%', height:'100%'}}
            > 
                
            {/* *****************************Image**********************************************************************************  */}
                <Image
                    source = {{uri:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
                    style = {styles.imgStyle}
                />
            {/* ***************************************Name and account number********************************************************** */}
             <Title style = {styles.nameStyle}>{Name}</Title>
             <Text style = {styles.accNoStyle}>Account No: {AccNo}</Text>
           {/* *************************************** Cards ******************************************************************************/}
            <Card style = {styles.cardStyle}>
                <View style = {{flexDirection :'row'}}>
                    <FIcon
                    name = "phone"
                    color = "blue"
                    size = {33}
                    />
                    <Text style = {styles.textStyle}>
                        {PhoneNo}
                    </Text>
                </View>
            </Card>     
            <Card style = {styles.cardStyle}>
                <View style = {{flexDirection :'row'}}>
                    <MIcon
                    name = "location-pin"
                    color = "blue"
                    size = {33}
                    />
                    <Text style = {{marginLeft:10,fontSize:20}}>
                       {Address}
                    </Text>
                </View>
            </Card>     
            <Card style = {styles.cardStyle}>
                <View style = {{flexDirection :'row'}}>
                    <FIcon
                    name = "rupee"
                    color = "blue"
                    size = {33}
                    style = {{marginLeft:5}}
                    />
                    <Text style = {styles.textStyle}>
                        {Balance}
                    </Text>
                </View>
            </Card> 


            {/* ******************************************* Buttons *********************************************************************** */}
            <View style = {styles.btnViewStyle}>
                <Button mode = "contained" 
                icon = "update" 
                style = {{backgroundColor:"#006aff", borderRadius:20,borderWidth:1,borderColor:'blue'}}
                onPress = {()=>navigation.navigate(NewCust)}
                >
                    Update
                </Button>
                <Button mode = "contained" 
                icon = "delete" 
                style = {{backgroundColor:"#f5313b", borderRadius:20,borderWidth:1,borderColor:'red'}}
                >
                    Delete
                </Button>
            </View>

            <Button mode = "contained" 
            style = {{backgroundColor:"#27a31c", borderRadius:30,borderWidth:1,borderColor:'green',alignSelf:'center',marginTop:20}}
            onPress = {()=>navigation.navigate("Transaction")}
            >
               <MSIcon name = "bank-transfer"color  = {'#fff'} size = {30} />
               <Text style = {{fontSize:15,marginLeft:5}}>New Transation</Text>
            </Button>
            


           {/* *************************** modal ********************************************************************************* */}


            </ImageBackground>
        </View>
       
    )
}

/* **********************************************************************StyleSheet******************************************************************** */
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
      //backgroundColor:"#b9dcf0"
       // backgroundColor:"#badef5"
    },
    imgStyle:{
        width:150,
        height:150,
        borderRadius:75,
        marginTop:20,
        alignSelf:'center',
    },
    nameStyle:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        //color:"#67018f",
        color:"#000",
        textDecorationLine:'underline',
        
    },
    accNoStyle:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },
    cardStyle:{
        margin:10,
        padding:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#fff'
    },
    textStyle:{
        fontSize:20,
        marginLeft:20
    },
    btnViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
    },
    modalStyle:{
        position:'absolute',
        bottom:2,
        //backgroundColor:"#fff",
        borderWidth:3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderColor:'#fff',
      backgroundColor:"#e3e5e8",
        width:"100%",
      //  alignItems:'center'
    },
    modalCardStyle:{
        marginTop:3,
        marginHorizontal:10,
        padding:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e3e5e8',
        backgroundColor:"#e3e5e8"
    }
  
})