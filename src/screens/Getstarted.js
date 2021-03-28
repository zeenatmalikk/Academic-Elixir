import { Grid, Typography, Button } from "@material-ui/core";

import React from "react";

export const Getstarted = () => {
  return (
    <div style={{ backgroundColor: "#33286C", marginBottom: 200 }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={4}>
          <Typography
            variant="h1"
            style={{
              paddingTop: 200,
              fontFamily: "initial",

              color: " #FFFFFF",

              paddingBottom: 30,
            }}
          >
            The best place for the best career
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              fontSize: 22,
              backgroundColor: "  #FFFFFF",
              color: "#33286C",
            }}
          >
            GET STARTED
          </Button>
        </Grid>
        <Grid md={3}>
          <img
            src="https://freewebillustrations.com/static/images/intro.svg"
            style={{ width: 880, height: 770 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
