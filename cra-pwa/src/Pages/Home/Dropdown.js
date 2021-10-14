import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Categories from "../../Data/Categories";
import { MenuItem } from "@material-ui/core";

const styles = {
  input: {
    color: "white"
    }
};

function CustomizedInputs(props) {
  const { classes } = props;

  return (
      <TextField
      select
      label="Select Category"
      variant="outlined"
          focused
          style={{marginBottom:30}}
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
      >{
                        Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                        ))
                    }

          </TextField>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);