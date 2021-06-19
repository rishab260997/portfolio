import React, { useEffect } from "react";
import { Typography, makeStyles, Paper, Fade } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileRequest } from "../Redux/action";
const useStyles = makeStyles({
  root: {
    margin: "0rem 1rem",
    padding: "5%",
  },
  dropdown: {
    position: "absolute",
    top: "10px",
  },
});

const MyProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileRequest());
  });

  const profile = useSelector((state) => state);

  if (profile) {
    console.log(profile);
  }

  return (
    <Fade in={true} className={classes.root}>
      <Paper className="text-center p-3 mx-5 shadow-lg rounded-lg">
        <Typography variant="h3" className="text-center">My Profile</Typography>
        <Typography variant="h5" className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography></Typography>
      </Paper>
    </Fade>
  );
};

export default MyProfile;
