import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import axios from "axios";

export const Register = () => {
  const [fname, setfirstname] = useState("");
  const [lname, setlastame] = useState("");
  const [grade, setgrade] = useState("");
  const [stream, setstream] = useState("");
  const [subject, setsubject] = useState("");

  const submitdata = (fname, lname, grade, stream, subject) => {
    console.log("firstname", fname);
    console.log("lastname", lname);

    axios
      .post(`http://localhost:5000/`, {
        firstname: fname,
        lastname: lname,
        grade: grade,
        stream: stream,
        subject: subject,
      })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <div>
        <Grid container>
          <Grid item md={2} />
          <Grid item md={10}>
            <TextField
              variant="outlined"
              placeholder="Enter firstname"
              onChange={(e) => setfirstname(e.target.value)}
            />
            <TextField
              variant="outlined"
              placeholder="Enter lastname"
              onChange={(e) => setlastame(e.target.value)}
            />
            <TextField
              variant="outlined"
              placeholder="Grade"
              onchange={(e) => setgrade(e.target.value)}
            />
            <TextField
              variant="outlined"
              placeholder="Stream"
              onchange={(e) => setstream(e.target.value)}
            />
            <TextField
              variant="outlined"
              placeholder="Subject"
              onchange={(e) => setsubject(e.target.value)}
            />
            <Button
              onClick={() => submitdata(fname, lname, grade, stream, subject)}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
