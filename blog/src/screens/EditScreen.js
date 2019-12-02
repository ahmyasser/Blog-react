import React, { useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen=({navigation})=>{
  const {state} = useContext(BlogContext);
  const {editBlogPost} =useContext(BlogContext);
  const blogPost =  state.find( post => post.id===navigation.getParam('id'));

  return(<BlogPostForm
    onSubmit={
      (title,content)=>
      editBlogPost(title, content, blogPost.id, ()=>navigation.pop())}
      initialValues={{title:blogPost.title, content:blogPost.content}}
      />

    );
};
const styles= StyleSheet.create({});

export default EditScreen;
