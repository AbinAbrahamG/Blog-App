import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Addblogs = () => {
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    image: '',
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBlog({ ...blog, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (blog.title && blog.description && blog.image) {
  //     console.log('Blog Submitted:', blog);
  //     alert('Blog added successfully!');

  //     // Clear form after submission
  //     setBlog({ title: '', description: '', image: '' });
  //   } else {
  //     alert('Please fill in all fields');
  //   }
  // };
  const navigate=useNavigate();
  const location=useLocation();
  function capValue(){
    if (location.state!=null) {
      axiosInstance.put(`http://localhost:9000/blogs/updateblog/`+location.state.val._id,blog).then((res)=>{
      alert(res.data);
      navigate('/blogs');
    })} else {
      axiosInstance.post('http://localhost:9000/blogs/addblog',blog).then((res)=>{
        alert(res.data.message);
        navigate('/blogs');
      }).catch((err)=>{
        alert('Failed to add blog');
      })
    }
    // console.log(blog);
  }
  useEffect(()=>{
    if (location.state!=null) {
      setBlog({...blog,title:location.state.val.title,
        description:location.state.val.description,
        image:location.state.val.image})
    } else {
      setBlog({...blog,title:'',
        description:'',
        image:''})
    }
  },[])
  return (
    <div>
      <Box
      sx={{
        marginTop: '8%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        textAlign: 'center',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography style={{fontWeight:'bold'}} variant="h4" gutterBottom color="red">
        Add a New Blog
      </Typography>

      <form>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />

        <TextField
          label="Description"
          name="description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
        />

        <TextField
          label="Image URL"
          name="image"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.image}
          onChange={(e)=>setBlog({...blog,image:e.target.value})}
        />

        <Button
          type="submit"
          variant="contained"
          color="error"
          sx={{ marginTop: 2 }}
          fullWidth
          onClick={capValue}>
          Submit Blog
        </Button>
      </form>
    </Box>
    </div>
  )
}

export default Addblogs