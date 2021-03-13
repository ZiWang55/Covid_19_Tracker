import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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

  console.log('newsData', newsData);
  // console.log('newsData?.docs', newsData?.docs);

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader component='div'>Coronavirus News</ListSubheader>
          </GridListTile>
          {newsData?.docs
            ? newsData.docs.map((item, i) => (
                <GridListTile key={i}>
                  <img src={`https://static01.nyt.com/${item.multimedia[1].url}`} alt={item.headline.main} />
                  <a href={item.web_url}>
                    <GridListTileBar
                      title={item.headline.main}
                      subtitle={<span>{item.byline.original}</span>}
                      // actionIcon={
                      //   <IconButton aria-label={`info about ${item.headline.main}`} className={classes.icon}>
                      //     <InfoIcon />
                      //   </IconButton>
                      // }
                    />
                  </a>
                </GridListTile>
              ))
            : 'No data found'}
        </GridList>
      </div>
    </React.Fragment>
  );
}

export default News;

{
  /* <Container>
  <Typography component='div' style={{ color: 'grey', backgroundColor: 'cream', height: '100%', padding: 10 }}>
    <h3 style={{ textAlign: 'center' }}>Coronavirus News</h3>

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
</Container>; */
}
