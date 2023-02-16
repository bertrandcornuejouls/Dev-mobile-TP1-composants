import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { lynxData } from '../Helpers/lynxData.js'
import { getPosts } from './..API/postAPI.js'
import PostItem from "./PostItem.js";

class Post extends React.Component{
    componentDidMount(){
        getPosts().then(res => {
            this.setState( {posts: res.data})
        })
    }
    
    constructor(props) {
        super(props)
        this.state = { posts: []}
    }
    
    render(){
        return(
            <View style={styles.content}>
                
                <FlatList data={this.posts}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) => <PostItem chien={item} />}
                />
            </View>

        )
    }
}

export default Post

const styles = StyleSheet.create({

    content: {
        flex: 1,
        
      },

    titreText: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
  })