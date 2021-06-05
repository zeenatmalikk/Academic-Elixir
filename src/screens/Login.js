import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const useStyles = makeStyles(() => ({
  regform: {
    textAlign: "center",
    color: "#fff",
    fontSize: 45,
    lineHeight: 2,
  },
  btnlogin: {
    backgroundColor: "#2B2B7F",
    color: "#fff",
  },
  signupred: {
    textAlign: "center",
    borderBottom: "1px",
    borderStyle: "solid",
    lineheight: "0.1em",
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#2B2B7F" }}>
      <Container style={{ padding: 0 }}>
        <Typography variant="h2" className={classes.regform}>
          Login form
        </Typography>
        <Grid container style={{ height: "100vh" }}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            md={12}
          >
            <Card style={{ width: "80%", padding: 15 }}>
              <CardContent>
                <Typography variant="h5" className={classes.heading}>
                  Enter your Mail <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField variant="outlined" fullWidth label="E-mail" />
                <div className="btnlog">
                  <Button variant="contained" className={classes.btnlogin}>
                    Log In
                  </Button>
                </div>
                <div className="redirect">
                  <h2 className="red-pg">
                    <span className="bgwhite">
                      Don't have an account?
                      <Link to="/Register">
                        {" "}
                        <span>Signup</span>
                      </Link>
                    </span>
                  </h2>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
