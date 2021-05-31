import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import HouseIcon from "@material-ui/icons/House";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import axios from "axios";

const useStyles = makeStyles(() => ({
  add: {
    fontSize: 20,
    color: "white",
    // marginLeft:23
  },
  cont: {
    fontSize: 20,
    color: "white",

    // marginLeft:23
  },
  mail: {
    fontSize: 20,
    color: "white",

    //  marginLeft:20
  },
  touch:{
    fontSize:"62px",
    fontFamily:"Times new roman",
    color:"#070235",
    textAlign:"center",
    textTransform:"capitalize",
    marginBottom:20
  }
}));

const Contact = () => {
  const [message, setmessage] = useState("");
  const [fullname, setfullname] = useState("");
  const [mail, setmail] = useState("");
  const [subject, setsubject] = useState("");

  console.log("msg",message);
  console.log("name",fullname);

  const submitdata = () => {
    if (message === "") {
      alert("message is empty");
    } else if (fullname === "") {
      alert("fullname is empty");
    } else if (mail === "") {
      alert("Mail is empty");
    } else if (subject === "") {
      alert("Subject is requires");
    } else {
      axios
        .post(`http://localhost:5000/createdata`, {
          message: message,
          name: fullname,
          mail: mail,
          subject: subject,
        })
        .then((res) => {
          // setIsLoading(false);
          console.log(res);
        })
        .catch((err) => console.log());
    }
    console.log("msg", message);
  };
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          backgroundColor: "#2B2B7F",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginBottom: "10%",
          fontFamily:"sans-serif",
          textTransform:"uppercase"
        }}
      >
        <Typography variant="h2" className="cour-offer">
          Contact
        </Typography>
      </div>
      <Container style={{ padding: 0 }}>
        <Typography className={classes.touch} variant="h2">
          Get in touch
        </Typography>
        <Grid container>
          <Grid item md={8} xs={12} style={{ width: "100%" }}>
            <TextField
              label="Enter Message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              onChange={(e) => setmessage(e.target.value)}
            />
            <TextField
              label="Enter your name"
              variant="outlined"
              fullWidth
              onChange={(e) => setfullname(e.target.value)}
              style={{ marginTop: 20 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setmail(e.target.value)}
              style={{ marginTop: 20 }}
            />
            <TextField
              label="Enter subject"
              variant="outlined"
              fullWidth
              onChange={(e) => setsubject(e.target.value)}
              style={{ marginTop: 20 }}
            />
            <Button
              variant="outlined"
              onClick={submitdata}
              style={{
                padding: 20,
                width: "20%",
                marginTop: 20,
                borderRadius: "10px",
                backgroundColor: "#070235",
                color: "whitesmoke",
              }}
            >
              SEND
            </Button>
          </Grid>
          <Grid item md={1} xs={0} />
          <Grid
            item
            md={3}
            xs={7}
            sm={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#4F4484",
              borderRadius: "20px",
              marginTop:20
            }}
          >
            <div>
              <div className="address">
                <HouseIcon style={{ marginTop: 20, color: "whitesmoke" }} />
                <Typography className={classes.add}>
                  Buttonwood, California.<br></br>
                  Rosemead, CA 91770
                </Typography>
                <Typography></Typography>
              </div>
              <div className="contact">
                <PhoneAndroidIcon
                  style={{ marginTop: 20, color: "whitesmoke" }}
                />
                <Typography className={classes.cont}>
                  +1 253 565 2365<br></br>
                  Mon to Fri 9am to 6pm
                </Typography>
              </div>
              <div className="mail">
                <MailIcon style={{ marginTop: 20, color: "whitesmoke" }} />
                <Typography className={classes.mail}>
                  support@colorlib.com<br></br>
                  Send us your<br></br> query anytime!
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
