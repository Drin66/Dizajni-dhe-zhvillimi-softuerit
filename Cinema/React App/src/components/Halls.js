import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Halls = () => {
    const [halls, setHalls] = useState([]);
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');

    useEffect(() => {
        fetchHalls();
    }, []);

    const fetchHalls = async () => {
        try {
            const response = await axios.get('/halls');
            setHalls(response.data);
        } catch (error) {
            console.error('Error fetching halls:', error);
        }
    };

    const addHall = async () => {
        try {
            const response = await axios.post('/halls', { name, capacity });
            setHalls([...halls, response.data]);
            setName('');
            setCapacity('');
        } catch (error) {
            console.error('Error adding hall:', error);
        }
    };

    const updateHall = async (id, updatedName, updatedCapacity) => {
        try {
            const response = await axios.put(`/halls/${id}`, { name: updatedName, capacity: updatedCapacity });
            setHalls(halls.map(hall => (hall.id === id ? response.data : hall)));
        } catch (error) {
            console.error('Error updating hall:', error);
        }
    };

    const deleteHall = async (id) => {
        try {
            await axios.delete(`/halls/${id}`);
            setHalls(halls.filter(hall => hall.id !== id));
        } catch (error) {
            console.error('Error deleting hall:', error);
        }
    };

    return (
        <div>
            <h1>Halls</h1>
            <ul>
                {halls.map(hall => (
                    <li key={hall.id}>
                        {`${hall.name} (Capacity: ${hall.capacity})`}
                        <button onClick={() => updateHall(hall.id, prompt('Enter new name:'), prompt('Enter new capacity:'))}>
                            Update
                        </button>
                        <button onClick={() => deleteHall(hall.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter hall name"
            />
            <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Enter hall capacity"
            />
            <button onClick={addHall}>Add Hall</button>
        </div>
    );
};

export default Halls;
