import React from "react";
import Topnav from "../Components/Topnav";
import { makeStyles } from "@material-ui/core";
import Top_image from "../assets/top_image.jpg";
import MyProfile from "../Components/MyProfile";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(0deg, rgba(2,20,45,1) 0%, rgba(3,1,2,1) 35%, rgba(3,1,2,1) 100%)",
  },
  topnav: {
    background: `url(${Top_image}) center center fixed`,
    transform: "translate3d(0px, 0px, 0px)",
    height: "100vh",
    overflow: "hidden",
  },
  profile: {
    margin: "0 1rem 0 1rem",
    position: "relative",
    top: "-90px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topnav}>
        <Topnav />
      </div>
      <div className={classes.profile}>
        <MyProfile />
      </div>
    </div>
  );
};

export default Home;
