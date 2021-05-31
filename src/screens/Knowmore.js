import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Avatar from "@material-ui/core/Avatar";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import GradeIcon from "@material-ui/icons/Grade";
import HelpIcon from "@material-ui/icons/Help";

export const Knowmore = () => {
  return (
    <div style={{ marginTop: 280, paddingBottom: 150 }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography
            variant="h3"
            style={{
              marginBottom: 30,
              fontWeight: "bold",
              color: " #33286C",
            }}
          >
            Want to know more
          </Typography>
          <Typography variant="h6" style={{ color: "gray", marginBottom: 30 }}>
            There arge many variations ohf passages of sorem gpsum ilable, but
            the majority have suffered alteration in some form, by ected humour,
            or randomised words whi.
          </Typography>
          <List>
            <ListItem>
              <FormatListBulletedIcon style={{ color: " #33286C" }} />

              <ListItemText
                primary="Randomised words whi"
                style={{ marginInline: 30 }}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <EmojiObjectsIcon style={{ color: " #33286C" }} />

              <ListItemText
                primary="Randomised words whi"
                style={{ marginInline: 30 }}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <GradeIcon style={{ color: " #33286C" }} />

              <ListItemText
                primary="Randomised words whi"
                style={{ marginInline: 30 }}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <HelpIcon style={{ color: " #33286C" }} />

              <ListItemText
                primary="Randomised words whi"
                style={{ marginInline: 30 }}
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            style={{
              margin: 17,
              backgroundColor: "  #33286C",
              width:250,
              height:50,
             
            }}
          >
            Find More Courses
          </Button>
        </Grid>
        <Grid item md={5} style={{ display: "flex" }}>
          <img
            src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/about2.png"
            style={{
              marginInline: 5,
              width:350
            }}
          />
          <img
            src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/about1.png"
            style={{
              margin: 25,
              paddingTop: 60,
              width:350
            }}
          />
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};
