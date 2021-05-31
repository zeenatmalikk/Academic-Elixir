import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Instagram, Twitter, YouTube } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  searchbar: {
    fontFamily: "Arial",
    fontSize: 32,
    marginBottom: 20,
    color: "white",
  },
  subscribe: {
    //   marginLeft:"-24%",
    height: 55,
    backgroundColor: "#2D3092",
    color: "white",

    "&:hover": {
      backgroundColor: "white",
      color: "#2D3092",
    },
  },
  iconfb: {
    fontSize: 46,
    paddingRight: 15,
    color: "#3B5998",
  },
  icontt: {
    fontSize: 46,
    paddingRight: 15,
    color: "#1DA1F2",
  },
  iconins: {
    fontSize: 46,
    paddingRight: 15,
    color: "#BB1500",
  },
  iconyt: {
    fontSize: 46,
    paddingRight: 15,
    color: "#2D3092",
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 26,
    color: "white",
  },
  margin: {
    marginBottom: 15,
    color: "white",
  },
}));

const Footernew = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#0B0B1D", marginTop: 40 }}>
      <Container
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container style={{ backgroundColor: "#0B0B1D" }}>
          <Grid item md={6} xs={12} sm={12} style={{ marginTop: 20 }}>
            <Typography className={classes.searchbar} variant="h3">
              STAY UPDATED
            </Typography>
            <div className="flex">
              <TextField
                variant="outlined"
                label="Email-address"
                size="medium"
                style={{
                  backgroundColor: "white",
                  outline: "none",
                }}
              />
              <Button variant="contained" className={classes.subscribe}>
                SUBSCRIBE NOW
              </Button>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12} style={{ marginTop: 20 }}>
            <Typography className={classes.searchbar} variant="h3">
              LET'S GET SOCIAL
            </Typography>
            <div className="icons-social">
              <FacebookIcon className={classes.iconfb} />
              <Twitter className={classes.icontt} />
              <Instagram className={classes.iconins} />
              <YouTube className={classes.iconyt} />
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: 20 }}>
          <Grid item md={3} xs={12} sm={6}>
            <Typography className={classes.heading}>About Us</Typography>
            <Typography className={classes.margin}>Online Learning</Typography>
            <Typography className={classes.margin}>About us</Typography>
            <Typography className={classes.margin}>Careers</Typography>
            <Typography className={classes.margin}>Press Centers</Typography>
            <Typography className={classes.margin}>
              Become an instructor
            </Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Typography className={classes.heading}>Campus</Typography>
            <Typography className={classes.margin}>Online Learning</Typography>
            <Typography className={classes.margin}>About us</Typography>
            <Typography className={classes.margin}>Careers</Typography>
            <Typography className={classes.margin}>Press Centers</Typography>
            <Typography className={classes.margin}>
              Become an instructor
            </Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Typography className={classes.heading}>Study</Typography>
            <Typography className={classes.margin}>Online Learning</Typography>
            <Typography className={classes.margin}>About us</Typography>
            <Typography className={classes.margin}>Careers</Typography>
            <Typography className={classes.margin}>Press Centers</Typography>
            <Typography className={classes.margin}>
              Become an instructor
            </Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Typography className={classes.heading}>Support</Typography>
            <Typography className={classes.margin}>Online Learning</Typography>
            <Typography className={classes.margin}>About us</Typography>
            <Typography className={classes.margin}>Careers</Typography>
            <Typography className={classes.margin}>Press Centers</Typography>
            <Typography className={classes.margin}>
              Become an instructor
            </Typography>
          </Grid>
          <hr style={{ borderBottom: "4px", color: "white" }}></hr>
        </Grid>
      </Container>
    </div>
  );
};

export default Footernew;
