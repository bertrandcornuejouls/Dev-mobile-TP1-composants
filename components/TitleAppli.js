import React from 'react';
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

class TitleAppli extends React.Component {
    render() {
        return(
            <View>
                <Text>Lynx</Text>
                <Text>L'application de photos insolites</Text> 
                <Text style = {{color : 'red'}}>Lynxx</Text>
                <Text style = {styles.text}>Chien Mix</Text>
            </View>
        )
    }
}
export default TitleAppli

const styles = StyleSheet.create({
    text : {
        color : 'red',
        fontSize : 50,
        textAlign : 'center',
    }
})
    