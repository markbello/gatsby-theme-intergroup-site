import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const EventDetails = ({
  eventId,
}) => {
  const details = useSelector((state) => state
    .getIn(['requests', 'events', 'GET', eventId, 'data'], {
      address: {},
      categories: [{ name: '' }],
      groups: [{ name: '' }],
      isLoading: true,
    }));

  const {
    address: {
      city,
      line1,
      line2,
      name: venueName,
      state,
      zip,
    },
    categories,
    groups,
  } = details;

  const addressLines = line2
    ? `${line1}, ${line2}`
    : line1;

  const categoriesLabel = categories.length < 2
    ? 'Category'
    : 'Categories';

  const parsedCategories = categories.length < 2
    ? categories[0].name
    : categories.map((category) => category.name).concat(', ');

  const parsedGroups = groups.length < 2
    ? groups[0].name
    : groups.map((group) => group.name).concat(', ');

  return details.isLoading
    ? (<p>spinner</p>)
    : (
      <div id={`eventDetails-${eventId}`}>
        <p id={`eventDetails-address-${eventId}`}>
          <strong>{venueName}</strong>
          <br />
          {addressLines}
          <br />
          {`${city}, ${state} ${zip}`}
        </p>
        <p id={`eventDetails-meta-${eventId}`}>
          <em>{`${categoriesLabel}: ${parsedCategories}`}</em>
          <br />
          <em>{`Hosted by: ${parsedGroups}`}</em>
        </p>
      </div>
    );
};

EventDetails.displayName = 'EventDetails';

EventDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
};

export default EventDetails;
