import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Question(props) {

    const classes = useStyles();

    const questionList = () => {
        props.question.map((question, idx) => {
            return <ListItem button key = {`question-list-${idx}`}>
                        <ListItemText primary={question.name} />
                    </ListItem>
        })
    } 

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Question!
                </ListSubheader>
            }
            className={classes.root}
        >
            {questionList()}
        </List>
    )
}
