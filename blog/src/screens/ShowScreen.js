import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import {AntDesign} from '@expo/vector-icons';
const ShowScreen=({navigation})=>{
  const {state} =useContext(BlogContext);
  const selectedPost = state.find(post => post.id===navigation.getParam('id'))
  return( <View>
    <Text>{selectedPost.title}</Text>
    <Text>{selectedPost.content}</Text>
  </View>
);
};

ShowScreen.navigationOptions=({navigation})=>{

  return{
    headerRight:<TouchableOpacity
     onPress={()=>
       navigation.navigate('Edit',{id:navigation.getParam('id')})
     }>
      <AntDesign
       name='edit'
       size={32}
      />
    </TouchableOpacity>
  }

}
const styles= StyleSheet.create({});

export default ShowScreen;
