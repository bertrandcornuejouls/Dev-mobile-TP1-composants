import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import TitleComposant from './components/TitleComposant';
import Post from './components/Post';
import PostItem from './components/PostItem';

export default function App() {
  return (
    
    <View>
      
      <TitleComposant style={{ flex: 0.2}}></TitleComposant>
      <Text>Test</Text>
      <Post></Post>
      <PostItem></PostItem>
      
      
      

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor : "#87CEEB",
    },
  titreText: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
      
  }
})