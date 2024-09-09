import React from 'react';
import { createUseStyles } from 'react-jss';
import servicesData from '../ScheduleOfServices.json';
import ServiceCard from './ServiceCard';

// Define styles using JSS
const useStyles = createUseStyles({
    scheduleContainer: {
        padding: '0',
        textAlign: 'center',
    },
    scheduleTitle: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    scheduleGrid: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
    },
});

const ScheduleOfServices = () => {
    const classes = useStyles();

    return (
        <div className={classes.scheduleContainer}>
            <h2 className={classes.scheduleTitle}>Our Schedule</h2>
            <div className={classes.scheduleGrid}>
                {servicesData.map((service, index) => (
                    <ServiceCard service={service} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ScheduleOfServices;
