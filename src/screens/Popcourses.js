import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const data = [
  {
    img:
      "https://www.indiaeducation.net/imagesvr_ce/4380/CAT.png",
    name: "CAT",
  },
  {
    img:
      "http://www.india.com/wp-content/uploads/2014/06/iit-jee-0115599.jpg",
    name: "JEE",
  },
  {
    img:
      "https://eduswami.com/wp-content/uploads/2019/12/Neet-Image-1-818x490.jpg",
    name: "NEET",
  },
];

const useStyles = makeStyles(() => ({
  textonheding: {
    
    "&:hover": {
      backgroundColor: "whitesmoke",
    
    },
  },
}));


export const Popcourses = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:180}}>
      <h1
        style={{
          marginInline: 550,
          color:" #33286C"
        }}
      >
        OUR POPULAR COURSES
      </h1>
      <Grid container>
        <Grid item md={1} />
        <Grid
          item
          md={10}
          style={{
            display: "flex",
          }}
        >
          {data.map((item) => (
            <Card
            className={classes.textonheding}
             style={{ margin: 13, width: 490, height: 380,  }}>
              <CardContent>
                <img src={item.img} style={{ width: 363 }} />

                <Typography variant="h4"
                  style={{
                    textAlign: "left",
                    paddingInline: 160,
                    fontWeight: "bold",
                    marginTop: 30,
                    color:" #12232E"
                    
                  }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          ))}

        </Grid>
        <Grid item md={1} />
        <Button variant="contained"  color="primary" style={{
        marginInline:550,
          fontSize:25,
          width:350,
          marginTop:50,
          backgroundColor:" #33286C"
        }}>
          Find More Courses
          
        </Button>
      </Grid>
    </div>
  );
};
