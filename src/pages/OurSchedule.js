import React from 'react';
import events from '../events.json';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

    const ordinal = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${day}${ordinal(day)} ${month}`;
};

const OurSchedule = () => {
    const today = new Date();

    const sortedEvents = events
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        background: 'linear-gradient(to bottom right, #FBFBFC, #334F8F)',
        minHeight: '100vh',
    };

    const eventCardStyle = (index) => ({
        display: 'flex',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        maxWidth: '800px',
        margin: '0 auto',
    });

    const eventImageStyle = {
        width: '180px',
        height: '180px',
        borderRadius: '10px',
        objectFit: 'cover',
    };

    const eventInfoStyle = {
        flex: 2,
        paddingRight: '10px',
        display: 'flex',
        flexDirection: 'column',
    };

    const eventDateStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    };

    const mobileEventCardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    };

    const mobileEventImageStyle = {
        width: '100%',
        height: 'auto',
    };

    return (
        <div style={containerStyle}>
            {sortedEvents.map((event, index) => (
                <div
                    key={index}
                    style={window.innerWidth < 768 ? mobileEventCardStyle : eventCardStyle(index)}
                >
                    <img
                        src={event.image}
                        alt={event.name}
                        style={window.innerWidth < 768 ? mobileEventImageStyle : eventImageStyle}
                    />
                    <div style={eventInfoStyle}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                        <p><strong>Audience:</strong> {event.audience}</p>
                    </div>
                    <div style={eventDateStyle}>
                        <p>{formatDate(event.date)}</p>
                        <p>{event.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurSchedule;
