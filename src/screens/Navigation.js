import { Grid, Typography, Button, List } from "@material-ui/core";
import React from "react";
import "./Navigation.css"
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "blue",
    
  },
  inputInput: {
  //  padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  hover: {
    
    "&:hover": {
      backgroundColor:"whitesmoke",
       
    },
  },
 

}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div style={{}}>
      <Grid container>
        <Grid
          item
          md={2}
         
          style={{
            display: "flex",
            backgroundColor: "whitesmoke",
            height: 100,
          }}
        >
          <img
            src="https://www.freeiconspng.com/uploads/education-png-13.png"
            style={{
              height: 60,
              alignSelf: "center",
            }}
          />
          <Typography
            variant="h6"
          classname="text1"
            style={{
              fontFamily: "unset",
              marginLeft: 7,
              margin: 9,
              fontWeight: "bold",
              textAlign: "center",
              alignSelf: "center",
              color:"#4F4484"
            }}
          >
           
            ACADEMIC ELIXIR
          </Typography>
        </Grid>
        <Grid item md={7} style={{ display: "flex" }}>
          <Button className={classes.hover}>
            <Typography
            
              style={{
                marginTop: 7,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 20,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              Home
            </Typography>
          </Button>
          <Button  className={classes.hover}>
            <Typography
              style={{
                marginTop: 8,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 20,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              About
            </Typography>
          </Button>
          <Button  className={classes.hover}>
            <Typography
              style={{
                marginTop: 7,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 10,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              Courses
            </Typography>
          </Button>
          <Button className={classes.hover}>
            <Typography
              style={{
                marginTop: 7,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 20,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              Instructors
            </Typography>
          </Button>
          <Button className={classes.hover}>
            <Typography
              style={{
                marginTop: 7,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 20,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              Blog
            </Typography>
          </Button>
          
          <Button className={classes.hover}>
            <Typography
              style={{
                marginTop: 7,
                fontWeight: "bold",
                fontFamily: "initial",
                marginleft: 20,
                fontsize: 10,
                paddingInline: 22,
                color:"#12232E"
              }}
            >
              Contact
            </Typography>
          </Button>
        </Grid>
        <Grid item md={3} style={{paddingTop:40}} >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
