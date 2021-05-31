import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Instructor.css";
const data = [
  {
    img: "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "Physics",
    name: "abcd",
  },
  {
    img: "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team2.png",
    faculty: "Chemistry",
    name: "abcd",
  },
  {
    img: " https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team3.png",
    faculty: "Biology",
    name: "abcd",
  },
  {
    img: "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team4.png",
    faculty: "English",
    name: "abcd",
  },
];

export const Instructor = () => {
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
        }}
      >
        <Typography variant="h2" className="cour-offer">
          Instructors
        </Typography>
      </div>
      <Container style={{ height: "100vh", padding:0, }}>
      <Grid container>
          {data.map((item) => (
            <Grid item md={3} xs={12} sm={6} className="content-inst">
              <Card>
                <CardContent style={{ width: "100%" }}>
                  <img className="img-inst" src={item.img}></img>
                  <Typography className="faculty" variant="h4">
                    {item.faculty}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          {data.map((item) => (
            <Grid item md={3} xs={12} sm={6} className="content-inst">
              <Card>
                <CardContent style={{ width: "100%" }}>
                  <img className="img-inst" src={item.img}></img>
                  <Typography className="faculty" variant="h4">
                    {item.faculty}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
