import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import {addVote} from '../../actions';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 360,
        backgroundColor: "transparent",
        textAlign: "center",
        width: "500px",
        minHeight: "100vh",
        "& > li": {
            width: "500px"
        }
    },
    textStyle: {
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: "30px",
        width: "400px",
        overflow: "hidden"
    },
    listItem: {
        width: "500px",
        overflow: "hidden",
        display: "flex"
    },
    secondary: {
        position: "inline-block",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonVote: {
      background: 'linear-gradient(45deg, #9e9e9e 30%, #616161 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgb(203,203,203)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  },
}));

export default function ListVote(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    console.log("options", props.options);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const submitVote = () => {
      addVote(value);
    }

    return (
      <div className="mt-32">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "70%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <List
            container
            style={{ minHeight: "100vh" }}
            dense
            className={classes.root}
          >
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {props.options.map((option, idx) => {
              const labelId = `checkbox-list-secondary-label-${idx}`;
              return (
                <ListItem key={idx} button className={classes.listItem}>
                  <ListItemText
                    disableTypography
                    id={labelId}
                    primary={
                      <Typography type="body2" className={classes.textStyle}>
                        {option.name}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction className={classes.secondary}>
                    <FormControlLabel
                      value={option._id}
                      edge="end"
                      // onChange={handleToggle(idx)}
                      // checked={checked.indexOf(idx) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                      control={
                        <Radio
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          name="checkedH"
                        />
                      }
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            </RadioGroup>
          </List>
        </div>
        <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
                <Link to = '/results'>
                    <Button className={classes.buttonVote} onClick={() => submitVote()}>Submit Vote</Button>
                </Link>
            </div>
      </div>
    );
}
