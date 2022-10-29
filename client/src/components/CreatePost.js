import React, { useState } from "react";
import axios from 'axios';

export default function CreatePost() {

  const [post, setPost] = useState({   

    description: "",
    postCategory: "",
    topic : ""

});


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
        
  e.preventDefault();
  await axios.post('http://localhost:8000/post/save' , post).then(() => {
      alert("attendance updated successfully");
  }).catch((err) => {
      alert(err);
  })
   
}

  
  return (
    <div>
    <div>
    <form style={{width : '50%' , padding : 100}}>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Topic</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="topic"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="description"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Post Category</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="postCategory"
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

