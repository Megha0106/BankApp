import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,FlatList} from 'react-native'
import {Card,FAB} from 'react-native-paper'
import NewCust from './NewCust'
import CustDetails from './CustDetails'
export default function Customers({navigation}){

    const data = [
        {id:"1",Name:"Megha Sonavane",AccNo:101,PhoneNo:"9145642079",Balance:"5000",Address:"Tasgaon",Picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},

        {id:"2",Name:"Shital Mali",AccNo:102,PhoneNo:"9145642079",Balance:"7000",Address:"Pune",Picture:"https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        
        {id:"3",Name:"Aditya Sonavane",AccNo:103,PhoneNo:"9145642079",Balance:"6000",Address:"Sangli",Picture:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"4",Name:"Veera", AccNo:104,PhoneNo:"9145642079",Balance:"3400",Address:"Mumbai",Picture:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
       {id:"5",Name:"Megha Sonavane",AccNo:101,PhoneNo:"9145642079",Balance:"1230",Address:"Thane",Picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"6",Name:"Shital Mali",AccNo:102,PhoneNo:"9145642079",Balance:"3456",Address:"Satara",Picture:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"7",Name:"Aditya Sonavane",AccNo:103,PhoneNo:"9145642079",Balance:"7095",Address:"Karad",Picture:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"8",Name:"Veera", AccNo:104,PhoneNo:"9145642079",Balance:"2345",Address:"Vita",Picture:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
       
       

    ]

    const renderList =((item)=>{
        return(
            <Card style = {styles.cardStyle} onPress = {()=>navigation.navigate("CustDetails",{item})}>
                <View style = {styles.cardViewStyle}>
                   <Image 
                    style = {styles.imgStyle}
                    source = {{uri:item.Picture}}
                   />
                   <View style = {styles.subCardViewStyle}>
                    <Text style = {styles.nameStyle}>
                        {item.Name}
                    </Text>
                    <Text style = {styles.accNoStyle}>
                       Account No:{item.AccNo}
                    </Text>
                   </View>
                   
                </View>
           </Card>
        )
    })


    return(
        <ImageBackground
        source = {require('./asset/background.jpg')}
        style = {{width:'100%', height:'100%'}}
        >
            <FlatList style = {{marginTop:10, marginBottom:5}}
                data = {data}
                renderItem = {({item})=>{
                    return renderList(item)
                }}
                keyExtractor = {item=>item.id}
            />
             <FAB
                style={styles.fabStyle}
                small = {false} 
                icon="plus"
                onPress={() => navigation.navigate(NewCust)}
            />
           
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cardStyle:{
       // backgroundColor:"#daddf7",
       backgroundColor:"#f0f7f7",
        marginTop:5,
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        padding:5,
        borderWidth:1,
        borderColor:'white'
    },
    cardViewStyle:{
        flexDirection:'row'
    },
    imgStyle:{
        width:80,
        height:80,
        borderRadius:40
    },
    subCardViewStyle:{
        flexDirection:'column',
        marginLeft:10,
        justifyContent:'center'
    },
    nameStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#080270'
    },
    accNoStyle:{
        fontSize:18
    },
    fabStyle: {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
        backgroundColor:"#006aff"
      },
})