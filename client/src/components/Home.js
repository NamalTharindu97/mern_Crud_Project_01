import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount(){
        this.retrievePost();
    }

    retrievePost(){
        axios.get('/posts/').then(res => {
            if(res.data.success){
                this.setState({
                    posts : res.data.existingPosts
                })
            }
        })
    }

   onDelete = (id) => {
        axios.delete("/post/delete/"+ id)
            .then((res) => {
                alert('employee detail deleted')
                this.retrievePost();
                window.location.reload(true)//reload page
    
            })
    
    }


  render() {
    return (
      <div className='container'>
      <p>All Posts</p>
            <table className='table'>
            {/* table head */}
                    <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Topic</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Post Category</th>
                                <th scope='col'>Action</th>
                            </tr>
                    </thead>
                {/* table body */}
                    <tbody>
                            {this.state.posts.map((posts,index) => (
                                <tr key={index}>
                                    <th scope='row'>{index+1}</th>

                                    <td>
                                    <a href={`/post/${posts._id}` }   style = {{textDecoration : 'none'}} >
                                           {posts.topic}
                                    </a>
                                    </td>
                                    <td>{posts.description}</td>
                                    <td>{posts.postCategory}</td>
                                    <td>

                                            <a className='btn btn-warning' href={`/edit/${posts._id}` }  >
                                                    <i className='fas fa-edit'></i>&nbsp;Edit
                                            </a>
                                            &nbsp;
                                            <a className='btn btn-danger' onClick={ () => this.onDelete(posts._id)  } >
                                                    <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                            </a>

                                    </td>
                                </tr>
                            ))}

                    </tbody>
            </table>

            <button className='btn btn-success'><a href='/add'  style={{textDecoration: "none" , color : "white"}}>Create New Post</a></button>

      </div>
    )
  }
}