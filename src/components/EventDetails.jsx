import React from 'react';

const EventDetails = () => {
    const eventData = {
        date: '21 de noviembre, 2023',
        time: '20:00',
        location: 'Teatro Principal',
        artist: 'Artista Principal',
        eventType: 'Recital',
        imageUrl: 'url_de_la_imagen.jpg',
    };

    return (
        <div className="event-card">
            <img src={eventData.imageUrl} alt="Evento" className="event-image" />
            <div className="event-details">
                <h2>{eventData.eventType}</h2>
                <p><strong>Fecha:</strong> {eventData.date}</p>
                <p><strong>Hora:</strong> {eventData.time}</p>
                <p><strong>Ubicación:</strong> {eventData.location}</p>
                <p><strong>Artista:</strong> {eventData.artist}</p>
            </div>
        </div>
    );
};

export default EventDetails;