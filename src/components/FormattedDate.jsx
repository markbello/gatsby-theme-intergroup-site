import React from 'react';
import PropTypes from 'prop-types';
import { formatDates } from '../core/utils/timeFormatting';

const FormattedDate = ({
  startDate,
  endDate,
}) => {
  const [date, hours] = formatDates(startDate, endDate);

  const isOneDayEvent = !!hours;

  return isOneDayEvent
    ? (
      <p>
        <em>{date}</em>
        <br />
        <em>{hours}</em>
      </p>
    ) : (
      <p>
        <em>{date}</em>
      </p>
    );
};

FormattedDate.displayName = 'Date';

FormattedDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
};

FormattedDate.defaultProps = {
  endDate: '',
};

export default FormattedDate;
