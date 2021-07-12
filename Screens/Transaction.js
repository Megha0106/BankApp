import React,{useState} from 'react'
import { View,Text, ImageBackground,StyleSheet,Modal, Alert} from "react-native"
import {Button, Title,TextInput,} from 'react-native-paper'
import Ionicon from 'react-native-vector-icons/Ionicons'
export default function Transaction({navigation}){

    const[modal1, setModal1] = useState(false)
    const[modal2, setModal2] = useState(false)
    const[amount, setAmount] = useState("")

    function process(){
        Alert.alert("Transaction Successful")
        setModal1(false)
        setModal2(false)
    }

   
    return(
        <View style = {styles.containerStyle}>
            <ImageBackground
            source = {require('./asset/background.jpg')}
            style = {{width:'100%', height:'100%'}}
            >
                <View style = {styles.subViewStyle}>

                    <Title style = {styles.titleStyle}>Type Of Transaction</Title>
                   {/* ************************ Buttons **************************************** */}
                   <Button style = {styles.btnStyle} mode = "contained" onPress = {()=>setModal1(true)}>
                       Deposite
                   </Button>
                   <Button style = {styles.btnStyle} mode = "contained" onPress = {()=>setModal1(true)}>
                       Withdraw
                   </Button>
                   <Button style = {styles.btnStyle} mode = "contained" onPress = {()=>setModal2(true)}>
                       Account Tranfer
                   </Button>

                    <Button mode = "text" onPress = {()=>navigation.navigate("CustDetails")}>
                        <Ionicon name = "close" size = {20} color = {"red"}/>
                        <Text style = {{color:'red', fontSize:18}}>Cancel</Text>
                    </Button>

                  {/* ****************************  Deposite withdraw modal********************************************* */}
                  <Modal
                   animationType = "slide"
                   visible = {modal1}
                   transparent = {true}
                   onRequestClose = {()=>setModal1(false)}
                  >
                      <View style = {styles.modalViewStyle}>
                          <TextInput
                           style = {styles.inputStyle}
                          mode = "flat"
                          label = "Amount"
                           keyboardType = "number-pad"
                          />
                          <Button mode = "contained" style = {styles.btnStyle} onPress = {()=>process()}>
                              Proceed
                          </Button>
                      </View>
    
                  </Modal>
                  {/* *********************************Account Transfer Modal************************************************************ */}
                  <Modal
                   animationType = "slide"
                   visible = {modal2}
                   transparent = {true}
                   onRequestClose = {()=>setModal2(false)}
                  >
                      <View style = {styles.modalViewStyle}>
                          <Title style = {styles.titleStyle}>Transfer to:</Title>
                          <TextInput
                           style = {styles.inputStyle}
                          mode = "flat"
                          label = "Account No."
                           keyboardType = "number-pad"
                          />
                          <TextInput
                           style = {styles.inputStyle}
                          mode = "flat"
                          label = "Amount"
                           keyboardType = "number-pad"
                          />
                          <Button mode = "contained" style = {styles.btnStyle} onPress = {()=>process()}>
                              Proceed
                          </Button>
                      </View>
    
                  </Modal>

                {/*  ***********************************  Dialog************************************************************** */}

               
                </View>

            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({

    containerStyle:{
        flex:1
    },
    subViewStyle:{
      //  backgroundColor:"#fff",
        top:'30%',
        bottom:'30%',
        marginHorizontal:20,
        borderRadius:10
    },
    titleStyle:{
        alignSelf:'center',
        textDecorationLine:'underline',
        color:'#080270',
        fontWeight:'bold',
        fontSize:25
    },
    btnStyle:{
        backgroundColor:'#006aff',
        marginVertical:10,
        marginHorizontal:30
    },
    modalViewStyle:{
        position:'absolute',
       top:'60%',
        width:'100%',
        backgroundColor:"#fff"
    },
    inputStyle:{
        margin:10
    }
})