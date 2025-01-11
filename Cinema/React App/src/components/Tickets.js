import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const [seat, setSeat] = useState('');

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        try {
            const response = await axios.get('/tickets');
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    const addTicket = async () => {
        try {
            const response = await axios.post('/tickets', { seat });
            setTickets([...tickets, response.data]);
            setSeat('');
        } catch (error) {
            console.error('Error adding ticket:', error);
        }
    };

    const updateTicket = async (id, updatedSeat) => {
        try {
            const response = await axios.put(`/tickets/${id}`, { seat: updatedSeat });
            setTickets(tickets.map(ticket => (ticket.id === id ? response.data : ticket)));
        } catch (error) {
            console.error('Error updating ticket:', error);
        }
    };

    const deleteTicket = async (id) => {
        try {
            await axios.delete(`/tickets/${id}`);
            setTickets(tickets.filter(ticket => ticket.id !== id));
        } catch (error) {
            console.error('Error deleting ticket:', error);
        }
    };

    return (
        <div>
            <h1>Tickets</h1>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>
                        {`Seat: ${ticket.seat}`}
                        <button onClick={() => updateTicket(ticket.id, prompt('Enter new seat number:'))}>Update</button>
                        <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                placeholder="Enter seat number"
            />
            <button onClick={addTicket}>Add Ticket</button>
        </div>
    );
};

export default Tickets;
