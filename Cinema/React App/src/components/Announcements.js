import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('/announcements');
            setAnnouncements(response.data);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    const addAnnouncement = async () => {
        try {
            const response = await axios.post('/announcements', { title, message });
            setAnnouncements([...announcements, response.data]);
            setTitle('');
            setMessage('');
        } catch (error) {
            console.error('Error adding announcement:', error);
        }
    };

    const updateAnnouncement = async (id, updatedTitle, updatedMessage) => {
        try {
            const response = await axios.put(`/announcements/${id}`, { title: updatedTitle, message: updatedMessage });
            setAnnouncements(announcements.map(announcement => (announcement.id === id ? response.data : announcement)));
        } catch (error) {
            console.error('Error updating announcement:', error);
        }
    };

    const deleteAnnouncement = async (id) => {
        try {
            await axios.delete(`/announcements/${id}`);
            setAnnouncements(announcements.filter(announcement => announcement.id !== id));
        } catch (error) {
            console.error('Error deleting announcement:', error);
        }
    };

    return (
        <div>
            <h1>Announcements</h1>
            <ul>
                {announcements.map(announcement => (
                    <li key={announcement.id}>
                        {`${announcement.title}: ${announcement.message}`}
                        <button onClick={() => updateAnnouncement(announcement.id, prompt('Enter new title:'), prompt('Enter new message:'))}>
                            Update
                        </button>
                        <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
            />
            <button onClick={addAnnouncement}>Add Announcement</button>
        </div>
    );
};

export default Announcements;
