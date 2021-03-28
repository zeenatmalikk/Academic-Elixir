import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import "./Latestnew.css";

export const Latestnews = () => {
  return (
    <div>
      <h1 className="heading">Latest news from Blog</h1>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={5}>
          <Card className="Card">
            <CardContent>
              <img
                src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/home-blog1.png"
                style={{ width: 550, }}
              />
              <Typography className="text">| Properties</Typography>

              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 23,
                  marginTop: 12,
                  fontWeight: "bold",
                  color:" #33286C"
                }}
              >
                Footprints in Time is perfect House in Kurashiki
              </Typography>
              <Typography
                className="text"
                style={{ marginTop: 14,color:"grey" }}
                variant="body1"
              >
                Read More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={5}>
          <Card className="Card">
            <CardContent>
              <img
                src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/home-blog2.png"
                style={{ width: 550 }}
              />
              <Typography className="text">| Properties</Typography>

              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 23,
                  marginTop: 12,
                  fontWeight: "bold",
                  color:"#33286C"
                }}
              >
                Footprints in Time is perfect House in Kurashiki
              </Typography>
              <Typography
                className="text"
                style={{ marginTop: 14, color:"grey" }}
                variant="body1"
              >
                Read More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};
