
import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Header from './Header';
import Sidebar from './Sidebar';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Content from './Content';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import WebIcon from '@material-ui/icons/Web';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright() {
    return (
        <></>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px 0px 16px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 320,
    },
    fixedBarChartHeight: {
        height: 340,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    footerStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
        fontSize: '1rem'
    },
    footerLinks: {
        padding: '10px',
        fontSize: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        paddingTop: '6px'
    },
    footerIcons: {
        padding: '2px',
        marginTop: '2px',
    }
}));

function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <Header classes={classes,open, handleDrawerOpen} />
            <Sidebar classes={classes,open, handleDrawerClose}  /> */}
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>

                    <div className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <AssessmentIcon />
                    </div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >

                        <MenuIcon />
                    </IconButton>
                    <Header classes={classes} />
                    {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >

                <div className={classes.toolbarIcon}>
                    <AssessmentIcon style={{ justifyItems: 'flex-start' }} />
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Sidebar classes={classes} />
                {/* <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List> */}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Content classes={classes} />
                <Box pt={4}>
                    {/* <Copyright /> */}
                    <div className={classes.footerStyles}>
                        {'Copyrights   ©    '}
                        <Link color="primary" href="https://cvpkr-portfolio.web.app/">
                           {' '} Prasanth CV
                        </Link>   
                        {'   '}
                        <div className={classes.footerLinks}>

                            {' @ Follow Me '}
                            {'  '}
                            <Link title='GitHub' color="primary" href='https://github.com/PrasanthReddy-Chittapu6683/'>
                                <GitHubIcon className={classes.footerIcons} /> {'  '}
                            </Link>
                            <Link  title='LinkedIn' color="primary" href='https://www.linkedin.com/in/prasanth-kumar-reddy-cv-385768b5/'>

                                <LinkedInIcon className={classes.footerIcons} /> {'  '}
                            </Link>
                            <Link title='Xing' color="primary"  href='https://www.xing.com/profile/PrasanthKumarReddy_CV'>
                           
                                <WebAssetIcon className={classes.footerIcons} />
                            </Link>
                             <Link title='My Portfolio' color="primary" href='https://cvpkr-portfolio.web.app/'>
                           
                                <WebIcon  className={classes.footerIcons} />
                            </Link>
                        </div>
                    </div>
                    {/* <Typography variant="body2" color="textSecondary" align='center'   >
                        {'Developer © '}
                        <Link color="inherit" href="https://cvpkr-portfolio.web.app/">
                            Prasanth CV
                        </Link>
                        {' | '}

                        <Typography variant="body3" color="textSecondary" align='center'   >

                           
                                {' @ Follow Me '}
                                {'  '}
                                <GitHubIcon /> {'  '}
                                <GitHubIcon /> {'  '}
                                <GitHubIcon />
                            
                        </Typography>
                    </Typography> */}
                </Box>
            </main>

        </div>
    );
}

export default Dashboard
