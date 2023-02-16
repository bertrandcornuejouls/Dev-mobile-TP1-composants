import React from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native'

class TP1 extends React.Component{
    render(){
        return(

           <View>
            <View style={{ flex: 0.2 }}></View>
            <AddPost></AddPost>
            <AddImage></AddImage>

           </View>

        )
    }
}
export default TP1

const style1 = StyleSheet.create({
    text : {
        borderWidth : 3,
        fontSize : 20,
        borderColor : 'grey'
        
    },

    titre : {
        fontSize : 30,
        textAlign : 'center',
        backgroundColor : '#123456',
    }
})