import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation})=>{
  const {state, deleteBlogPost,getBlogPosts} = useContext(BlogContext);
  useEffect(() => {
    getBlogPosts();
    const listener=navigation.addListener('didFocus',()=>{
      getBlogPosts();
    })
    return()=>{
      listener.remove();
    }
     }
    ,[]);
return <View>
<FlatList
data={state}
keyExtractor={post=>`${post.id}`}
renderItem={({item})=>{
  return( <TouchableOpacity onPress={()=>navigation.navigate('Show',{ id:item.id})}>
  <View style={styles.row}>
  <Text style={styles.text}>{item.title}  {item.id}</Text>
  <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
  <Feather
  name='trash-2'
  style={styles.icon1}
  />
  </TouchableOpacity>
  </View>
  </TouchableOpacity>)
}}
/>
 </View>

};
IndexScreen.navigationOptions=({navigation})=>{
  return{
    headerRight:(
      <TouchableOpacity onPress={()=>{navigation.navigate('Create')}}>
        <Feather
        name='plus'
        style={styles.icon2}
        />
        </TouchableOpacity>
    )
  }

}
styles= StyleSheet.create({
  row:{
flexDirection:'row' ,
paddingHorizontal:20,
paddingVertical:20,
justifyContent: 'space-between',
borderRadius: 4,
borderWidth: 0.5,
borderColor: '#d6d7da',

},
text:{
  fontSize:18
},
icon1:{
  fontSize:32
},
icon2:{
  fontSize:32,
  paddingHorizontal:26
}
});

export default IndexScreen;
