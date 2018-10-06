import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    appBar: {
        flexGrow: 1,
        backgroundColor: '#78909C',

    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    bottomSpacing: {
        paddingBottom: '50',
    },

    noUnderLine: {
        textDecoration: 'none',
    },
    paperImage: {
        maxWidth: '100%',
    },
    grid: {
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
        }
    }


});

function Layout(props) {
    const {classes} = props;

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>

                    <Typography variant="title" color="inherit" noWrap className={classes.grow}>
                        <img src="images/aion-logo1.png" height="60" width="150"/>
                    </Typography>
                    <span type="title" color="inherit" className="appBarRight">
                         <a className="github-button" href="https://github.com/satran004/aion-graphql" data-size="large"
                            data-show-count="true" aria-label="Star satran004/aion-graphql on GitHub">Star</a>
                    </span>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant="display2" align="center" color="textPrimary" gutterBottom>
                            <img src="images/aion-logo.png" height="100" width="300"/>
                        </Typography>
                        <Typography variant="subheading" align="center" color="textSecondary" paragraph>
                            It provides a GraphQL API endpoint to interact with AION Blockchain.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Button variant="outlined" color="primary"
                                            href="https://github.com/satran004/aion-graphql">
                                        GitHub
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" href="https://docs.aion-graphql.com">
                                        Documents
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary"
                                            href="https://api.aion-graphql.com/playground.html">
                                        Try In Browser
                                    </Button>
                                </Grid>
                            </Grid>

                        </div>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>

                    <Grid container spacing={40}>
                        <Grid item  sm={6} md={4} lg={4} className={classes.grid}>
                            <Paper className={classes.card} elevation={2}>
                                <img src="images/txn_gql.gif" className={classes.paperImage}/>
                                <Typography variant="subheading" gutterBottom align='center'>
                                    <b> In Browser Editor </b>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item sm={6} md={4} lg={4} className={classes.grid}>
                            <Paper className={classes.card} elevation={2}>
                                <Typography variant="title" color="textSecondary" paragraph align='center'>


                                </Typography>

                            <Typography variant="title" color="default" paragraph align='center' >
                                <b> Query  </b>
                                <Typography variant="caption" color="textSecondary" paragraph align='center'>
                                    Get Transaction, Get Blocks, Get Balance ...
                                </Typography>
                            </Typography>
                            <Typography variant="title" color="default" paragraph align='center'>
                                <b> Mutation  </b>
                                <Typography variant="caption" color="textSecondary" paragraph align='center'>
                                    Send Transaction, Deploy Contract, Create Account ...
                                </Typography>
                            </Typography>
                            <Typography variant="title" color="default" paragraph align='center'>
                                <b> Subscription</b>
                                <Typography variant="caption" color="textSecondary" paragraph align='center'>
                                    Listen Contract Events ...
                                </Typography>
                            </Typography>

                            </Paper>
                        </Grid>
                        <Grid item  sm={6} md={4} lg={4} className={classes.grid}>
                            <a href="https://satran004.github.io/aion-graphql-docs/" className={classes.noUnderLine}>
                            <Paper className={classes.card} elevation={2}>
                                <img src="images/schema_doc.png" height="300" className={classes.paperImage}/>
                                <Typography variant="subheading" gutterBottom align='center'>
                                    <b> Schema Document</b>
                                </Typography>
                            </Paper>
                            </a>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant="headline" align="center" color="primary" paragraph>
                            <b> Want to try AION GraphQL in your Application ? </b>
                        </Typography>
                        <Typography variant="subheading" align="center" color="textSecondary" paragraph>
                            Try this GraphQL API endpoint (Only For Testing)
                            <br/>
                            <Typography variant="caption" align="center" color="textSecondary" paragraph>
                                <b> https://api.aion-graphql.com/graphql</b>
                            </Typography>
                        </Typography>

                        <Typography variant="subheading" align="center" color="textSecondary" paragraph>
                            <br/>
                            <Button variant="contained" color="secondary"
                                    href="https://api.aion-graphql.com/playground.html">
                                Explore AION Mainnet
                            </Button>
                        </Typography>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="caption" align="center" color="textSecondary" component="p">
                    © 2018, AION GraphQL Project
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);