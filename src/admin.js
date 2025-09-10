import React, { useState } from 'react';

const AdminPage = () => {
  const [events, setEvents] = useState([]);

  // Form states for Create Event
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [totalTickets, setTotalTickets] = useState('');
  const [createMessage, setCreateMessage] = useState('');

  // Handle Create Event
  const handleCreateEvent = (e) => {
    e.preventDefault();

    if (!eventName.trim() || !eventDate || !eventLocation.trim() ||
      isNaN(parseFloat(ticketPrice)) || isNaN(parseInt(totalTickets, 10))) {
      alert('Please fill all fields correctly.');
      return;
    }

    const newEvent = {
      name: eventName.trim(),
      date: eventDate,
      location: eventLocation.trim(),
      price: parseFloat(ticketPrice),
      totalTickets: parseInt(totalTickets, 10),
    };
    setEvents([...events, newEvent]);
    setCreateMessage(`Event "${newEvent.name}" created successfully!`);

    // Reset form
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setTicketPrice('');
    setTotalTickets('');
  };

  return (
    <main style={styles.container}>
      {/* Create Event Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Create Event</h2>
        <form onSubmit={handleCreateEvent} style={styles.form}>
          <label style={styles.label}>
            Event Name:
            <input
              type="text"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Date:
            <input
              type="date"
              value={eventDate}
              onChange={e => setEventDate(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Location:
            <input
              type="text"
              value={eventLocation}
              onChange={e => setEventLocation(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Ticket Price (USD):
            <input
              type="number"
              min="0"
              step="0.01"
              value={ticketPrice}
              onChange={e => setTicketPrice(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Total Tickets:
            <input
              type="number"
              min="1"
              value={totalTickets}
              onChange={e => setTotalTickets(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>Create</button>
        </form>
        {createMessage && <p style={{ ...styles.message, color: 'green' }}>{createMessage}</p>}
      </section>
    </main>
  );
};

// Simple inline styles object
const styles = {
  container: {
    maxWidth: 900,
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    borderRadius: 8,
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  heading: {
    color: '#0066cc',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#0066cc',
    border: 'none',
    borderRadius: 4,
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  message: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
};

export default AdminPage;
