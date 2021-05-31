import { Button, Card, CardContent, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    img:
      "https://images.vexels.com/media/users/3/151610/isolated/preview/745f2cc314a4b27b252b25e2e7117cef-chemistry-tubes-icon-by-vexels.png",
    heading: "Chemistry",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-3a90cad30aee46a2c46d41f33f9613f5.png",
    heading: "Physics",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-09ec4ed53f4acd22bd2d8c8d221554b5-microscope.png",
    heading: "Biology",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
];

const data2 = [
  {
    img:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-350301fa6348e5a5e4ca497472d8ccaa.png",
    heading: "C.S",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-06a804a3569e45e5d1e1bbf78158bd8c.png",
    heading: "Math",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
  {
    img:
      "http://www.myiconfinder.com/uploads/iconsets/256-256-26b70a6370aa8e18421df94146a40cb4.png",
    heading: "English",
    desc:
      "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
  },
];

const useStyles = makeStyles(() => ({
  textonheding: {
    textAlign: "center",
    
  },
  Hoverstyle:{
    "&:hover": {
      backgroundColor: " #33286C",
      color: "#EEFBFB",
    },
  }

  
}));
const Categories = () => {
  const classes = useStyles();
  return (
    <div >
      <h1 style={{ marginInline: 510 , color:"#33286C"}}>LET'S BROWSE ALL CATEGORIES</h1>
      <Grid container style={{marginTop:50}}>
        <Grid item md={1} />
        <Grid item md={10} style={{ display: "flex" }}>
          {data.map((item) => (
            <Card
              className={classes.textonheding}
              
              style={{ margin: 40, width: 500, height: 400, backgroundColor:" #FFFFFF",color:"#33286C"}}
            >
              <CardContent>
                <img
                  src={item.img}
                  style={{ height: 100, width: 100, marginRight: 150 }}
                />
                <Typography
                  style={{ textAlign: "left", margin: 30, color:"#33286C"  }}
                  variant="h4"
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="h6"
                  style={{ textAlign: "left", margin: 30 }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={10} style={{ display: "flex" }}>
          {data2.map((item) => (
            <Card
              className={classes.textonheding}
              style={{ margin: 40, width: 500, height: 400, backgroundColor:" #FFFFFF",color:"#33286C" }}
            >
              <CardContent>
                <img
                  src={item.img}
                  style={{ height: 100, width: 100, marginRight: 150 }}
                />
                <Typography
                  style={{ textAlign: "left", margin: 30 , color:"#33286C" }}
                  variant="h4"
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="h6"
                  style={{ textAlign: "left", margin: 30 }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
           
        </Grid>
         
        <Button variant="contained"  color="primary"
        className={classes.Hoverstyle}
        style={{
          marginInline:550,
          fontSize:25,
          width:350,
          marginTop:50,
          backgroundColor:"#33286C",
          color:"#FFFFFF",
        
        }}>
          Find More Courses
          <Link to="/More"  />
        </Button>
        
      </Grid>
    </div>
  );
};

export default Categories;
