import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await axios.get('/locations');
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const addLocation = async () => {
        try {
            const response = await axios.post('/locations', { address, city, country });
            setLocations([...locations, response.data]);
            setAddress('');
            setCity('');
            setCountry('');
        } catch (error) {
            console.error('Error adding location:', error);
        }
    };

    const updateLocation = async (id, updatedAddress, updatedCity, updatedCountry) => {
        try {
            const response = await axios.put(`/locations/${id}`, { address: updatedAddress, city: updatedCity, country: updatedCountry });
            setLocations(locations.map(location => (location.id === id ? response.data : location)));
        } catch (error) {
            console.error('Error updating location:', error);
        }
    };

    const deleteLocation = async (id) => {
        try {
            await axios.delete(`/locations/${id}`);
            setLocations(locations.filter(location => location.id !== id));
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    return (
        <div>
            <h1>Locations</h1>
            <ul>
                {locations.map(location => (
                    <li key={location.id}>
                        {`${location.address}, ${location.city}, ${location.country}`}
                        <button onClick={() => updateLocation(location.id, prompt('Enter new address:'), prompt('Enter new city:'), prompt('Enter new country:'))}>
                            Update
                        </button>
                        <button onClick={() => deleteLocation(location.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
            />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country"
            />
            <button onClick={addLocation}>Add Location</button>
        </div>
    );
};

export default Location;
