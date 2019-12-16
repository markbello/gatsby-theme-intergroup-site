import React from 'react';
import PropTypes from 'prop-types';
import EventSummary from './EventSummary';

const EventsList = ({ events }) => (
  <section id="events-container">
    <h2>Upcoming Events</h2>
    {events.map(({
      description,
      endDate,
      flyer,
      id,
      name,
      startDate,
    }) => (
      <EventSummary
        description={description}
        endDate={endDate}
        eventId={id}
        flyer={flyer}
        key={`eventSummary-${name}`}
        name={name}
        startDate={startDate}
      />
    ))}
  </section>
);

EventsList.displayName = 'Events';

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    flyerImage: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    venueName: PropTypes.string,
  })).isRequired,
};

export default EventsList;
