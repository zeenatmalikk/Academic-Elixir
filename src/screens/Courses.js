import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Courses.css";

const data = [
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-06a804a3569e45e5d1e1bbf78158bd8c.png",
    name: "Math",
    desc: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-06a804a3569e45e5d1e1bbf78158bd8c.png",
    name: "Math",
    desc: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-06a804a3569e45e5d1e1bbf78158bd8c.png",
    name: "Math",
    desc: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
];

const Courses = () => {
  return (
    <div>
      
     
      <div style={{backgroundColor:"#2B2B7F", height:"70vh", display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", marginBottom:"10%"}}>
      <Typography variant="h2" className="cour-offer">
          Courses to offer:
        </Typography>
       
      </div>
      
      <Container>
      <div style={{ height: "90vh" }}>
        <Grid container >
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            style={{ alignContent: "center", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.map((item) => (
                <Card className="display" style={{ width: "40%", margin: 20 }}>
                  <CardContent>
                    <div>
                      {" "}
                      <img className="img-course" src={item.img}></img>
                      <h1>{item.name}</h1>
                      <h3 className="desc"> {item.desc} </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{  justifyContent: "space-between" }}
        >
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            style={{ alignContent: "center", width: "100%", margin: 5 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.map((item) => (
                <Card className="display" style={{ width: "40%", margin: 20 }}>
                  <CardContent>
                    <img className="img-course" src={item.img}></img>
                    <h1>{item.name}</h1>
                    <h3> {item.desc} </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
      </Container>
    </div>
  );
};

export default Courses;
