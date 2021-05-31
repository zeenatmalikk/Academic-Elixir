import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Blog.css";

const useStyles = makeStyles(() => ({
  head: {
    fontFamily: "Times New Roman",
    fontSize: "24px",
    lineHeight: 2,
  },
  desc: {
    fontFamily: "Times New Roman",
    fontSize: "24px",
  },
}));

const data = [
  {
    img:"https://preview.colorlib.com/theme/onlineedu/assets/img/blog/single_blog_2.png",
    head: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    head: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    head: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    head: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
];



export const Blog = () => {
  const classes = useStyles();
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
     <Container style={{ backgroundColor:"red" }}>
        <Grid container >
          {data.map((item) => (
            <Grid item md={12} xs={12} sm={6} className="content-blog">
              <Card className="card-inst">
                <CardContent style={{ width: "100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
                  <img className="img-blog" src={item.img}></img>
                  <Typography className={classes.head} variant="h4">
                    {item.head}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
        {/* <Grid container>
          {data.map((item) => (
            <Grid item md={12} xs={12} sm={12} className="first-grid">
              <div className="first-card">
                <Card>
                  <CardContent className="card-blog">
                    <img src="https://preview.colorlib.com/theme/onlineedu/assets/img/blog/xsingle_blog_1.png.pagespeed.ic.Vb11bfvxZv.webp" />
                    <Typography variant="h3" className={classes.head}>
                      {item.head}
                    </Typography>
                    <Typography variant="h6" className={classes.desc}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              </Grid>
          ))}
        </Grid>
        <Grid container>
          {data.map((item) => (
            <Grid item md={12} xs={12} sm={12} className="first-grid">
              <div className="first-card">
                <Card>
                  <CardContent className="card-blog">
                    <img src="https://preview.colorlib.com/theme/onlineedu/assets/img/blog/xsingle_blog_1.png.pagespeed.ic.Vb11bfvxZv.webp" />
                    <Typography variant="h3" className={classes.head}>
                      {item.head}
                    </Typography>
                    <Typography variant="h6" className={classes.desc}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              </Grid>
          ))}
        </Grid> */}


             
            
      {/* </Container> */}
    </div>
  );
};
