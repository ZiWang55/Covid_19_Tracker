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
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    color: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: '15px 15px 0 0',
    fontSize: '1.2em',
    fontWeight: 'bold'
  },
  gridList: {
    width: '75%'
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

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader className={classes.title} component='div'>
              Coronavirus News
            </ListSubheader>
          </GridListTile>
          {newsData?.docs
            ? newsData.docs
                .filter((item) => item.multimedia.length !== 0)
                .slice(0, 8)
                .map((item, i) => (
                  <GridListTile key={i}>
                    <img src={`https://static01.nyt.com/${item.multimedia[1].url}`} alt={item.headline.main} />
                    <a href={item.web_url}>
                      <GridListTileBar title={item.headline.main} subtitle={<span>{item.byline.original}</span>} />
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
