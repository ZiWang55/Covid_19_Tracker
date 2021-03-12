import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import { fetchNews } from "../../api";
// import styles from './News.module.css';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16)
//     }
//   }
// }));

export default function News(props) {
  // const classes = useStyles();

  console.log(props.docs);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Typography
          component="div"
          style={{ color: 'grey', backgroundColor: "cream", height: "100%", padding: 10}}
        >
          <h3 style={{textAlign: 'center'}}>Coronavirus News</h3>

          <ul>
            {props.docs
              ? props.docs.map((item, i) => (
                  <>
                    <li key={i + "li"}>
                      <a href={item.web_url}>{item.abstract}</a>
                    </li>
                  </>
                ))
              : ""}
          </ul>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
