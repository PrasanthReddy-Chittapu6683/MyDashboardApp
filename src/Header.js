import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
function Header({ classes }) {
    // const [open, setOpen] = React.useState(true);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    return (
        <>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                My Dashboard
                </Typography> 
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

        </>

    )
}

export default Header
