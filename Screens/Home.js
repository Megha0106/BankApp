import React,{useState} from 'react'
import {View,Text,StyleSheet,Modal,FlatList} from 'react-native'
import {Button,Card, Title} from 'react-native-paper'
export default function Home ({navigation}){

    const transType = [
        {id : 1, type : "Deposite"},
        {id : 2, type : "Withdraw"},
        {id : 3, type : "Account Transfer"},
    ]

    const renderList = ((item)=>{

        return(
            <Card style = {styles.cardStyle}>
                <Text style = {{fontSize:20,marginLeft:20,fontWeight:'bold'}}>{item.type}</Text>
            </Card>
        )
    })
    const[modal,setModal] = useState(false)
    return(
       <View style = {styles.containerStyle}>
           <Button onPress = {()=>setModal(true)}>
               Show
           </Button>

           <Modal
            animationType = "slide"
            visible = {modal}
            transparent = {true}
            onRequestClose = {()=>setModal(false)}
           >
               <View style = {styles.modalStyle}>
                   <Title style = {{alignSelf:'center'}}>Type of Transaction</Title>
                <FlatList
                data = {transType}
                renderItem = {({item})=>{
                    return renderList(item)
                }}
                />
                <Button icon = "close" onPress = {()=>setModal(false)}>
                    <Text style = {{color:'red'}}>Cancel</Text>
                </Button>
               </View>
           </Modal>
       </View> 
    )
}

const styles = StyleSheet.create({

    containerStyle:{
        flex:1,
        backgroundColor:'#fff'
    },
    modalStyle:{
        position:'absolute',
        bottom:2,
        backgroundColor:"#fff",
        borderWidth:3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderColor:'#e3e3e8',
      //  backgroundColor:"#e3e5e8",
        width:"100%",
      //  alignItems:'center'
    },
    cardStyle:{
       backgroundColor:"white",
       marginTop:2,
       
       padding:2,
      // width:200
    }
})