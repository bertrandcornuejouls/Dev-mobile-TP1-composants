import React from 'react';
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

class TitleComposant extends React.Component {
    render() {
        return(
            <View>
                
                <Text style = {style1.titre}>Chien Mix</Text>
                <Text style = {style1.soustitre}>L'application pour mixer les toutous</Text>
            </View>
        )
    }
}
export default TitleComposant

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
    },

    soustitre : {
        fontSize : 14,
        textAlign : 'center',

    }
})