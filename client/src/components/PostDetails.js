import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';

export default function PostDetails() {
  
  const {id} = useParams();

  const [post, setPost] = useState({   

    description: "",
    postCategory: "",
    topic : ""

});
  const { description, postCategory, topic } = post;

  useEffect(()=>{
    getEvents();
},[])


  function getEvents() {
          axios.get("http://localhost:8000/post/" + id ).then((res) => {
            if(res.data.success){

              setPost(res.data.post);
  
            }
          });
          console.log(post)
  }


  return (
    <div >
              <text>Topic  :     {topic}</text> <br/>
              <text>Description  :     {description}</text><br/>
              <text>Category  :     {postCategory}</text><br/>
    </div>
  )
}




