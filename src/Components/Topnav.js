import React, { useState } from "react";
import { Typography, makeStyles, ClickAwayListener } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    margin: "1rem 5rem",
  },
  dropdown: {
    position: "absolute",
    top: "10px",
  },
});
const Topnav = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = (expand) => {
    expand === expanded ? setExpanded(false) : setExpanded(expand);
  };
  return (
    <div className={classes.root}>
      <div className="d-flex justify-content-between">
        <Typography className="text-white">Rishabh Jha</Typography>
        <div className="d-flex justify-content-around">
          <div className="ml-5">
            <button
              className="btn bg-transparent"
              onClick={() => handleExpanded("sections")}
            >
              <Typography className="text-white outline-none shadow-none border-none">
                Sections
                <ExpandMoreIcon />
              </Typography>
            </button>
            {expanded === "sections" && (
              <ClickAwayListener onClickAway={() => handleExpanded("none")}>
                <div
                  className={clsx(
                    classes.dropdown,
                    "bg-light rounded-lg shadow-lg p-3 mt-5"
                  )}
                >
                  <div>
                    <button className="btn btn-white btn">Knowledge</button>
                  </div>
                  <hr />
                  <div>
                    <button className="btn btn-white btn">Proficiency</button>
                  </div>
                </div>
              </ClickAwayListener>
            )}
          </div>
          <div className="ml-5">
            <button
              className="btn bg-transparent"
              onClick={() => handleExpanded("aboutme")}
            >
              <Typography className="text-white outline-none shadow-none border-none">
                About me <ExpandMoreIcon />
              </Typography>
            </button>
          </div>
          {expanded === "aboutme" && (
            <ClickAwayListener onClickAway={() => handleExpanded("none")}>
              <div
                className={clsx(
                  classes.dropdown,
                  "bg-light rounded-lg shadow-lg p-3 mt-5"
                )}
              >
                <div>
                  <button className="btn btn-white btn">Work Experience</button>
                </div>
                <hr />
                <div>
                  <button className="btn btn-white btn">Portfolio</button>
                </div>
                <hr />
                <div>
                  <button className="btn btn-white btn">Education</button>
                </div>
              </div>
            </ClickAwayListener>
          )}
          <div className="ml-5">
            <button className="btn bg-white shadow-lg">
              <Typography className="text-dark outline-none shadow-none border-none">
                Contact Now!
              </Typography>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="text-white display-4 mt-5">THE ULTIMATE PORTFOLIO</h1>
      </div>
    </div>
  );
};

export default Topnav;
