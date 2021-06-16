import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NotFoundStyles';

class NotFound extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.main}>
                    <h1 className={classes.title}>404</h1>
                    <p className={classes.body}>PAGE NOT FOUND</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NotFound);
