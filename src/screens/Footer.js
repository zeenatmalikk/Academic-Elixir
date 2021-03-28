import { Grid, Typography, TextField, Button, Icon } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { blue, maroon, darkblue } from "@material-ui/core/colors";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ marginTop: 170, backgroundColor: "#4F4484" }}>
      <Grid container style={{ height: 200 }}>
        <Grid item md={2} />
        <Grid item md={4} xs={12} style={{}}>
          <Typography
            variant="h4"
            style={{
              paddingBottom: 30,
              fontSize: 40,
              marginTop: 20,
              color: "white",
            }}
          >
            STAY UPDATED
          </Typography>
          <form>
            <TextField
              classname="textfieldstyle"
              id="outlined-basic"
              label="Enter your mail...."
              variant="outlined"
              gutterBottom
              style={{
                width: 350,
                backgroundColor: "white",
              }}
            />
            <Button
              variant="outlined"
              style={{ height: 56, backgroundColor: "#FFBED6" }}
            >
              SUBMIT
            </Button>
          </form>
        </Grid>

        <Grid item md={1} />
        <Grid itemm md={5}>
          <Typography
            variant="h4"
            className="typo"
            style={{ paddingBottom: 38, marginTop: 20, color: "white" }}
          >
            LET'S GET SOCIAL
          </Typography>
          <FacebookIcon gutterBottom style={{ fontSize: 50, color: "white" }} />
          <TwitterIcon
            style={{ fontSize: 50, color: "white", paddingLeft: 20 }}
          />
          <InstagramIcon
            style={{ fontSize: 50, color: "white", paddingLeft: 20 }}
          />
          <YouTubeIcon
            style={{ fontSize: 50, color: "white", paddingLeft: 20 }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          height: 300,
        }}
      >
        <Grid item md={2} />
        <Grid item md={2}>
          <Typography variant="h6" style={{ color: "white" }}>
            ABOUT US
          </Typography>
          <Typography variant="body1" style={{ marginTop: 25, color: "white" }}>
            Online Learning
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            About us
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Careers
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Press Center
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Become an Instructor
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" style={{ color: "white" }}>
            CAMPUS
          </Typography>
          <Typography
            style={{ marginTop: 25, color: "white" }}
            variant="body1"
            gutterBottom
          >
            Our Plans
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Free Trial
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Academic Solutions
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Business Solutions
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Government Solutions
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" style={{ color: "white", marginBottom:25 }}>
            STUDY
          </Typography>
          <Typography
            style={{ marginTop: 25 }}
            variant="body1"
            style={{ color: "white" }}
            gutterBottom
          >
            Admissions Policy
          </Typography>
          <Typography variant="body1" style={{ color: "white",  }} gutterBottom>
            Getting started
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            online application
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            visa information
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            tution calculator
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" style={{ color: "white" }}>
            SUPPORT
          </Typography>
          <Typography
            style={{ marginTop: 25, color: "white" }}
            variant="body1"
            gutterBottom
          >
            support
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Contacts us
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            System Requirements
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Register Activation key
          </Typography>
          <Typography variant="body1" style={{ color: "white" }} gutterBottom>
            Site Feedback
          </Typography>
        </Grid>
      </Grid>
      <hr style={{ margin: 25 }}></hr>
    </div>
  );
};

export default Footer;
