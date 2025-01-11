import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const addEvent = async () => {
        try {
            const response = await axios.post('/events', { name, date });
            setEvents([...events, response.data]);
            setName('');
            setDate('');
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const updateEvent = async (id, updatedName, updatedDate) => {
        try {
            const response = await axios.put(`/events/${id}`, { name: updatedName, date: updatedDate });
            setEvents(events.map(event => (event.id === id ? response.data : event)));
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const deleteEvent = async (id) => {
        try {
            await axios.delete(`/events/${id}`);
            setEvents(events.filter(event => event.id !== id));
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {`${event.name} - ${event.date}`}
                        <button onClick={() => updateEvent(event.id, prompt('Enter new name:'), prompt('Enter new date:'))}>
                            Update
                        </button>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter event name"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={addEvent}>Add Event</button>
        </div>
    );
};

export default Events;
