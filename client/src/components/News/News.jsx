import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { fetchNews } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing('75%'),
      height: theme.spacing('100%')
    }
  }
}));

export default function News(props) {
  const classes = useStyles();

  console.log(props.docs);

  return (
    <div className={classes.root}>
      <Paper>
        <h3>Coronavirus News</h3>

        <ul>
          {props.docs
            ? props.docs.map((item, i) => (
                <>
                  <li key={i + 'li'}>
                    <a href={item.web_url}>{item.abstract}</a>
                  </li>
                </>
              ))
            : ''}
        </ul>
      </Paper>
    </div>
  );
}
