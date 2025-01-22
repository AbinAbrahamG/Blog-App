import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Home = () => {
  const[cardData,setData]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    axiosInstance.get('http://localhost:9000/blogs').then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  function update_data(val){
    navigate('/addblogs',{state:{val}});
  }
  function handleDelete(val) {
    axiosInstance.delete('http://localhost:9000/blogs/deleteblog/' + val._id).then((res) => {
      alert(res.data);
      setData(cardData.filter(item => item._id !== val._id));
    }).catch((err) => {
      console.log(err);
    });
  }
    // const cardData=[{title:'Food Blog',description:'Good Food',image:'https://images.unsplash.com/photo-1559095240-55a16b2dda6a?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}, 
    //     {title:'Movie Blog',description:'Good Movie',image:'https://previews.123rf.com/images/sonulkaster/sonulkaster1203/sonulkaster120300037/12819991-illustration-of-movie-theme-objects-on-red-background.jpg'}, 
    //     {title:'Travel Blog',description:'Travel!!!',image:'https://media.istockphoto.com/id/692862134/vector/world-travel-photo-planning-summer-vacations-holiday-journey-tourism-and-vacation-theme.jpg?s=612x612&w=0&k=20&c=hH6WR9hoVdeoVqE2Rrzy_-9GTJevyqeRf9IV1CclCD4='}]
  return (
    <div style={{margin:'5%'}}>
    <Grid container spacing={2}>
        {cardData.map((row)=>(
        <Grid size={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        title={row.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {row.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='warning' onClick={(()=>{
          update_data(row);
        })}>Update</Button>
        <Button size="small" variant='contained' color='error' onClick={()=>handleDelete(row)}>Delete</Button>
      </CardActions>
    </Card> 
    </Grid>
    ))}
    </Grid>

     
    </div>
  )

}

export default Home