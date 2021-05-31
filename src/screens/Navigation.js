import { Grid, Typography, Button, List } from "@material-ui/core";
import React from "react";
import "./Navigation.css";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

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
      backgroundColor: "whitesmoke",
    },
  },
  btnstyle: {
   
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    // marginleft: 20,
    fontsize: 10,
    // paddingInline: 22,
    color: "#12232E",
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
          sm={12}
          xs={12}
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
            // classname="text1"
            style={{
              fontFamily: "unset",
              marginLeft: 7,
              margin: 9,
              fontWeight: "bold",
              textAlign: "center",
              alignSelf: "center",
              color: "#4F4484",
            }}
          >
            ACADEMIC ELIXIR
          </Typography>
        </Grid>
        <Grid item md={7} xs={12} sm={12} style={{ display: "flex" , alignItems:"center", justifyContent:"space-evenly",}}>
          <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>Home</Typography>
          </Button>
          <Link to="/abt" style={{textDecoration:"none"}}>
          <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>About</Typography>
          </Button>
          </Link>
          <Link to="/course" style={{textDecoration:"none"}}>
          <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>Courses</Typography>
          </Button>
          </Link>
          <Link to="/instructor"  style={{textDecoration:"none"}}>
          <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>Instructors</Typography>
          </Button>
          </Link>
          {/* <Link to="/blog"> */}
          {/* <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>Blog</Typography>
          </Button>
          </Link> */}

         <Link to="/contactus" style={{textDecoration:"none"}}>
         <Button className={classes.hover}>
            <Typography className={classes.btnstyle}>Contact</Typography>
          </Button>
         </Link>
        </Grid>
        
        <Grid item md={3} style={{ paddingTop: 40 }}>
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
