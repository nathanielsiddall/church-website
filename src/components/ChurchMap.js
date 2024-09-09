import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import churchIconImg from './pinecrestTricolor.svg'

// Create custom icon for the marker
const churchIcon = new L.Icon({
    iconUrl: churchIconImg,
    iconSize: [72, 32],
});

const ChurchMap = () => {
    const position = [33.013357, -94.369744];

    const AddressText = {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: '1rem',
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div style={AddressText}>Address: 507 W Broad St, Linden, TX 75563</div>
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={position} icon={churchIcon}>
                    <Popup>
                        <strong>Pinecrest Baptist Church</strong><br />
                        Address: 123 Church St, Example City
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ChurchMap;
