import React,{useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  input: {
    color: "white"
  }
};

function CustomizedInputs(props) {

  const { classes } = props;

  return (
    <TextField
      style={{marginBottom:30}}
      label="Enter Your Name"
      variant="outlined"
      focused
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
