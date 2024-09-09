import React from 'react';
import { Card } from 'primereact/card';
import { useInView } from 'react-intersection-observer';
import { createUseStyles } from 'react-jss';

// Define styles using JSS
const useStyles = createUseStyles({
    serviceCard: {
        width: '300px',
        opacity: 0,
        transform: 'translateX(-100%)', // Start the div off-screen to the left
        transition: 'all 0.5s ease-in-out',
        '&.visible': {
            opacity: 1,
            transform: 'translateX(0)', // Slide in when visible
        },
    },
    cardContent: {
        fontSize: '1rem',
        color: '#666',
    },
});

const ServiceCard = ({ service }) => {
    const classes = useStyles();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Start animation when 10% of the card is in view
    });

    return (
        <div
            ref={ref} // Assign unique ref to each card
            className={`${classes.serviceCard} ${inView ? 'visible' : ''}`}
        >
            <Card title={service.name} subTitle={service.time} className="p-shadow-3">
                <p className={classes.cardContent}>{service.description}</p>
            </Card>
        </div>
    );
};

export default ServiceCard;
