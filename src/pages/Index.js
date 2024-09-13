import React from 'react';
import Hero from "../components/Hero";
//import Card from "../components/IndexCard";
import ScheduleOfServices from "../components/ScheduleOfServices";
import 'primeicons/primeicons.css';
import ChurchMap from "../components/ChurchMap";
import ButtonGrid from "../components/ButtonGrid";


//import ScrollableImageGrid from "../components/ScrollableImageGrid";

const Index = () => {
    const scrollableContentStyle = {
        position: 'relative',
        padding: '15px',
        background: 'linear-gradient(133deg, rgba(51,79,143,1) 22%, rgba(251,251,252,1) 100%)',
        minHeight: '100vh',
        zIndex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    return (
        <div>
            <Hero />
            <div style={scrollableContentStyle}>
                <ButtonGrid />
                <ScheduleOfServices />
                <ChurchMap />
                {/*<ScheduleOfServices services={Schedule} />*/}
                {/*{links.map(link => (*/}
                {/*    <Card key={link.label} {...link} />*/}
                {/*))}*/}
                {/*<ScrollableImageGrid images={images} />*/}
            </div>
        </div>
    );
};

export default Index;
