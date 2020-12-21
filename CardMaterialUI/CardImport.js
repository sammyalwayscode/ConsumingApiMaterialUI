import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from './axios';
// import img from "./img/q.jpg";
// import SearchIcon from '@material-ui/icons/Search';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  margin:{
    margin:"40px",
    width: "300px"
  }
});














export default function MediaCard() {
  const classes = useStyles();
  const [presentState, setPresentState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [input, setInput] = useState("");



  const getData = async () => {
    const res = await axios.get("/")
    console.log(res)
    if (res.data) {
      return setPresentState(res.data)
    }
  }

  const checkStatus = () => {
    console.log(presentState)
  }

  const checkInput = async () => {
    console.log(input)

    const result = await axios.get(`/${input}`);
    console.log(result);
    if (result.data) {
      return setSearchState(result.data);
    }
  }

  useEffect(()=>{
    getData()
    checkInput()
  }, [])

  return (
    <>
      
      
      
      
      
      
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
           
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Make a Search" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
          </Grid>
          <Button onClick={checkInput} variant="outlined" color="secondary">
        Search
      </Button>
        </Grid>
      </div>
      
      
      
      
      
      
      
      

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={searchState.avatar_url}
    title="Apples"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
     {searchState.login}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    public_repos: {searchState.public_repos}
              {""}
              <Typography>followers: {searchState.followers}</Typography>
              <Typography>following: {searchState.following}</Typography>
              {""}
              {""}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button onClick={checkStatus} size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>
    </>
  );
}