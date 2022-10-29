import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';

export default function EditPost() {

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


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}


const onSubmit = async e => {
        
  e.preventDefault();
  await axios.put('http://localhost:8000/post/update/' + id , post).then(() => {
      alert("attendance updated successfully");
      window.location.reload(true)//reload page
  }).catch((err) => {
      alert(err);
  })
   
}


  return (
    <div >
              <text>Topic  :     {topic}</text> <br/>
              <text>Description  :     {description}</text><br/>
              <text>Category  :     {postCategory}</text><br/>

              <div>
    <form style={{width : '50%' , padding : 100}}>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Topic</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="topic"
                    defaultValue={topic}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="description"
                     defaultValue={description}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Post Category</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="postCategory"
                     defaultValue={postCategory}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="col-auto my-1">
                  <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                  </div>

    </form>
    </div>
    </div>
  )
}

