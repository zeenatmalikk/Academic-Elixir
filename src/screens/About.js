import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./About.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  contact: {
    backgroundColor: "white",
    color: "grey",
    letterSpacing: 2,
    fontSize: 17,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  highlights: {
    backgroundColor: "yellow",
    display: "inline-block",

    justifyContent: "space-between",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div style={{backgroundColor:"#2B2B7F", height:"70vh", display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", marginBottom:"10%"}}>
      <Typography variant="h2" className="cour-offer">
        About Us
        </Typography>
       
      </div>
      <div className="section">
        <div className="container">
          <div className="left"></div>
          <div className="right">
            <h1>Let's get familiar</h1>
            <h3>
              Educating Leaders since 2015, Academic Elixir strongly believes
              that the best is yet to come, and is always ready to reach higher
              levels of excellence in the years to come. With our finest faculty
              give your child's career a boost.
            </h3>
            <Button variant="outlined" className={classes.contact}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default About;
