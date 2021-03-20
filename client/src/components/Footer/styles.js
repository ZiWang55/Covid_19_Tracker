import { makeStyles } from "@material-ui/core/styles";
import Image from "../../images/covid19-removebg-preview.png"


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    backgroundColor: "lightgrey",
    padding: "15px",
    width: "75%",
    
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    borderRadius: "0px 0px 10px 10px",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "150px",
    backgroundSize: "cover",
    '@media (max-width: 1000px)' : {
      backgroundImage: 'none',
      alignItems: 'center'
    },
    
    '@media (max-width: 770px)' : {
      backgroundColor: '#fafafa'
    }
    
    
  },
  superContainer: {
    display: "flex",
    width: '100%',
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "5000px",
    paddingTop: "5px",
    paddingBottom: "5px",
    
    paddingLeft: "0px",
    paddingRight: "0px"

   
   



  }
  
}));

export default useStyles;
