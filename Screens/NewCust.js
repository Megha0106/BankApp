import React, {useState}from 'react'
import {ImageBackground,StyleSheet,View,Modal,Text,Image} from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Customers from './Customers'

export default function NewCust({navigation}){

    //data elements
    const[Name, setName] = useState("")
    const[PhoneNo, setPhoneNo] = useState("")
    const[Address, setAddress] = useState("")
    const[Balance,setBalance] = useState("")
    const[Picture, setPicture] = useState("")
    const[modal, setModal] = useState(false)

    return(
      <ImageBackground 
        source = {require('./asset/background.jpg')}
        style = {{width:'100%', height:'100%'}}
        > 
            <View style = {styles.containerStyle}>
                <TextInput
                    label="Name"
                    mode = "outlined"
                    style = {styles.inputStyle}
                    theme = {theme}
                    value={Name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label="Phone No."
                    mode = "outlined"
                    style = {styles.inputStyle}
                    theme = {theme}
                    keyboardType = "phone-pad"
                    value={PhoneNo}
                    onChangeText={text => setPhoneNo(text)}
                />
                <TextInput
                    label="Address"
                    mode = "outlined"
                    style = {styles.inputStyle}
                    theme = {theme}
                    value={Address}
                    onChangeText={text => setAddress(text)}
                />
                <TextInput
                    label="Initial Balance"
                    mode = "outlined"
                    style = {styles.inputStyle}
                    theme = {theme}
                    keyboardType = "number-pad"
                    value={Balance}
                    onChangeText={text => setBalance(text)}
                />
                <Button mode = "contained" icon = "upload" style = {styles.uploadBtnStyle} onPress = {()=>setModal(true)}>
                    Upload Photo
                </Button>
                <View style = {{flexDirection:'row',justifyContent:'space-around',margin:5}}>
                
                    <Button mode = "contained"  style = {styles.saveBtnStyle} onPress = {()=>console.log("Saved")}>
                    <Ionicon name = "save"
                        color = {"white"}
                        size = {18}/>
                        <Text style = {{fontSize:18,marginLeft:5}}>Save</Text> 
                        
                    </Button>
                    
                    <Button mode = "contained"  style = {styles.cancelBtnStyle} onPress = {()=>navigation.navigate(Customers)}>
                    <Ionicon name = "close-circle"
                        color = {"white"}
                        size = {20}/>
                        <Text style = {{fontSize:18,marginLeft:5}}>Cancel</Text> 
                        
                    </Button>
                    
                </View>
                
               <Modal 
                animationType = "slide"
                visible = {modal}
                transparent = {true}
                onRequestClose = {()=>setModal(false)}
                >
                    <View style = {styles.modalStyle}>
                        <View style = {styles.modalViewStyle}>
                            <Button mode = "contained" icon = "camera" style = {styles.modalBtnStyle} onPress = {()=>console.log("Camera")}>
                            Camera
                            </Button> 
                            <Button mode = "contained" icon = "folder-image" style = {styles.modalBtnStyle} onPress = {()=>console.log("Gallery")}>
                                Gallery
                            </Button>  
                        </View>
                  
                        <Button mode = "text"  onPress = {()=>setModal(false)}>
                            <Ionicon
                            name = "close"
                            color = {"red"}
                            size = {18}
                            />
                           <Text style = {{color:'red'}}>Close</Text> 
                        </Button> 
                       
                    </View>
                </Modal>
               
            </View>
        </ImageBackground> 
    )
}


const theme = {
    colors:{
        primary:'#0202f0'
    }
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
       // backgroundColor:"#badef5"
    },
    inputStyle:{
        margin:5,
        padding:5,
    },
    uploadBtnStyle:{
        margin:10,
        backgroundColor:'#002aff',
        borderRadius:15,
        borderColor:'#006aff',
        borderWidth:1
    },
    modalBtnStyle:{
        margin:10,
        backgroundColor:'#006aff',
        borderRadius:20,
        borderWidth:1,
        borderColor:'blue'
    },
    modalViewStyle :{
        flexDirection :"row",
        alignContent:'center',
        justifyContent:'center'
    },
    modalStyle:{
        position :"absolute",
        bottom:2,
        alignSelf:'center',
       
    },
    saveBtnStyle:{
        backgroundColor:"#38d648",
       // margin:5
    },
    cancelBtnStyle:{
        backgroundColor:"#f51b43",
       // margin:5
    },
    imgStyle:{
        width:500,
        height:400,
        alignSelf:'center',
        marginTop:20,
    },
   
})