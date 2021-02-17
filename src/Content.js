import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Box, Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import LineCharts from './LineChart';
import Deposits from './Deposits';
import Orders from './Orders';
import MyBarCharts from './MyBarCharts';
import MyPieChart from './MyPieChart';



function Content({ classes }) {
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={6} lg={8}>
                    <Paper className={fixedHeightPaper}>
                        <LineCharts />

                    </Paper>
                </Grid>

                {/* Recent Deposits */}
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>

                {/* Chart */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={classes.fixedBarChartHeight}>
                        {/* <BarCharts /> */}
                        <MyBarCharts />

                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={classes.fixedBarChartHeight}>
                        {/* <BarCharts /> */}
                        <MyPieChart />

                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Orders />
                    </Paper>
                </Grid> 
            </Grid>

        </Container>
    )
}

export default Content
