import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const myIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <div style={{ marginTop: "5rem", height: "50vh" }}>
            <MapContainer center={[33.998551, -81.045249]} zoom={7} scrollWheelZoom={false} style={{ height: "100%", overflow: "hidden" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[33.998551, -81.045249]} icon={myIcon}>
                    <Popup>
                        Columbia, SC
                    </Popup>
                </Marker>
                <Marker position={[34.852619, -82.394012]} icon={myIcon}>
                    <Popup>
                        Greenville, SC
                    </Popup>
                </Marker>
                <Marker position={[32.787609, -79.940367]} icon={myIcon}>
                    <Popup>
                        Charleston, SC
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}