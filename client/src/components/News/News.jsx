import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
      // width: theme.spacing('75%'),
      // height: theme.spacing('100%')
    }
  }
}));

function News(props) {
  const [newsData, setNewsData] = useState();

  const fetchNews = async () => {
    try {
      let dailyNews = await axios.get('/api/news');
      // console.log('dailyNews', dailyNews.data.response);
      return dailyNews.data.response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    let gimmeMyData = await fetchNews();
    setNewsData(gimmeMyData);
    // console.log('gimmeMyData', gimmeMyData);
  }, []);

  const classes = useStyles();

  // console.log('newsData', newsData);
  // console.log('newsData?.docs', newsData?.docs);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography
          component="div"
          style={{ color: 'grey', backgroundColor: "cream", height: "100%", padding: 10}}
        >
          <h3 style={{textAlign: 'center'}}>Coronavirus News</h3>

    <div className={classes.root}>
      
        

        <ul>
          {newsData?.docs
            ? newsData.docs.map((item, i) => (
                <>
                  <li key={i + 'li'}>
                    <a href={item.web_url}>{item.abstract}</a>
                  </li>
                </>
              ))
            : 'No data found'}
        </ul>
   
    </div>
    </Typography>
      </Container>
    </React.Fragment>
  );
}

export default News;
