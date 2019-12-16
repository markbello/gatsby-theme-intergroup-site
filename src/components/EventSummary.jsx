import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { apiRequest } from '../core/actions/api';
import useEnvironmentVariables from '../core/hooks/useEnvironmentVariables';
import FormattedDate from './FormattedDate';
import EventDetails from './EventDetails';

const EventContainer = styled.article`
  max-height: 300px;
`;

const EventContentContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FlyerContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding-left: 10%;

  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;

const EventSummary = ({
  name,
  description,
  eventId,
  flyer: { url: flyerUrl },
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const { API_URL } = useEnvironmentVariables();

  const [shouldShowDetails, setShouldShowDetails] = useState(false);
  const showDetailsButtonHandler = () => {
    dispatch(apiRequest({
      API_URL,
      endpoint: 'events',
      method: 'GET',
      id: eventId,
    }));

    setShouldShowDetails(true);
  };

  return (
    <EventContainer>
      <EventContentContainer>
        <FlyerContainer>
          <img src={`${API_URL}/${flyerUrl}`} width="100%" alt={name} />
        </FlyerContainer>
        <InfoContainer>
          <h3>{name}</h3>
          <FormattedDate startDate={startDate} endDate={endDate} />
          <p>{description}</p>
          {shouldShowDetails
            ? (
              <EventDetails eventId={eventId} />
            )
            : (
              <button type="button" onClick={showDetailsButtonHandler}>show details</button>
            )}
        </InfoContainer>
      </EventContentContainer>
    </EventContainer>
  );
};

EventSummary.displayName = 'EventSummary';

EventSummary.propTypes = {
  description: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
  flyer: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
};

export default EventSummary;
