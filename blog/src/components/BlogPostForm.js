import React, {useState,useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const BlogPostForm=({onSubmit, initialValues})=>{
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return( <View>
  <Text style={styles.labelStyle}>Blog title</Text>
  <TextInput
   autoCorrect={false}
    value={title}
    style={styles.inputStyle}
    placeholder=""
    onChangeText={(text) => setTitle(text)}
  />
  <Text style={styles.labelStyle}>Blog content</Text>
  <TextInput
  autoCorrect={false}
    value={content}
    style={styles.inputStyle}
    placeholder=""
    onChangeText={(text) => setContent(text)}
  />
<Button title="Save blog" onPress={()=>onSubmit(title,content)}/>
  </View>
);
};
BlogPostForm.defaultProps = {
    initialValues: {
      title:"",
      content:""
    }
}
const styles= StyleSheet.create({
  labelStyle:{
    fontSize:18,
    paddingHorizontal:15,
    paddingVertical:10
  },
  inputStyle:{
    fontSize:18,
    marginHorizontal:15,
    borderColor:'grey',
    borderRadius:5,
    borderWidth:2,
    height:40,
    marginBottom:10
  }

});

export default BlogPostForm;
