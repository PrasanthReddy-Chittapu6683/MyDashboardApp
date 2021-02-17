import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Divider, List } from '@material-ui/core';
import { mainListItems, secondaryListItems } from './listItems';

function Sidebar({ classes }) {
    return (
        <>
            <Divider />
            <List> {mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>

        </>
    )
}

export default Sidebar
