import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { PieChart, Pie, Sector, Cell } from 'recharts';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" >
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" className={classes.depositContext} href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
            <div>
                <PieChart className={classes.depositContext} width={300} height={150}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx={150}
                        cy={120}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                </PieChart>
            </div>
        </React.Fragment>
    );
}