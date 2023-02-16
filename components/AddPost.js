import React from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native'

class AddPost extends React.Component{
    render(){
        return(

            <View>
                <Text style = {style1.titre}>Titre de la publication</Text>
                <TextInput style = {style1.text}></TextInput>
                <Text style = {style1.titre}>Détail de la publication</Text>
                <TextInput style = {style1.text}></TextInput>
            </View>
        )
    }
}
export default AddPost

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