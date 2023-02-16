import React from "react";
import { Button, View, TextInput, StyleSheet, Text, Image } from 'react-native'

class PostItem extends React.Component{
    render(){
        return(
            <View>
                
                <Text style = { styles.texte}>Nom du post</Text>
                <Text style = {styles.texte1}>Posté par</Text>
                <Text style = {styles.texte3}>Description</Text>
            </View>
        )
    }

    _toggleDisplayDetails(){
        this.setState({isDetailsDisplayed: !this.state.isDetailsDisplayed})
    }

}

export default PostItem

const styles = StyleSheet.create({



    titreText: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    texte: {
        backgroundColor:'orange',
        textAlign : 'center',
        borderWidth : 3,
        fontSize : 20,
    },

    texte1: {
        backgroundColor:'green',
        textAlign : 'center',
        borderWidth : 3,
        fontSize : 20,
    },
    texte3: {
        backgroundColor:'purple',
        textAlign : 'center',
        borderWidth : 3,
        fontSize : 20,        
    }
  })