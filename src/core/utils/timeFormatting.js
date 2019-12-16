import moment from 'moment-timezone';

const SINGLE_DATE_FORMAT = 'dddd, MMMM Do, YYYY, h:mm a';
const HOUR_FORMAT = 'h:mm a';
const SAME_DATE_FORMAT = 'dddd, MMMM Do, YYYY';

export const getHourString = (date) => moment(date).tz('America/New_York')
  .format(HOUR_FORMAT);

export const getSingleDateString = (date) => moment(date).tz('America/New_York')
  .format(SINGLE_DATE_FORMAT);

export const getMultipleDateString = (firstDate, secondDate) => {
  const formattedFirstDate = getSingleDateString(firstDate);
  const formattedSecondDate = getSingleDateString(secondDate);

  return `${formattedFirstDate} - ${formattedSecondDate}`;
};

export const getSameDayString = (firstDate) => moment(firstDate).tz('America/New_York')
  .format(SAME_DATE_FORMAT);


export const isSameDay = (firstDate, secondDate) => moment(firstDate)
  .isSame(moment(secondDate), 'day');

export const formatDates = (firstDate, secondDate) => {
  // returning as arrays in order to put same-day times on a separate line
  if (!secondDate) { return [getSingleDateString(firstDate)]; }

  if (isSameDay(firstDate, secondDate)) {
    const dayString = getSameDayString(firstDate);
    const startTime = getHourString(firstDate);
    const endTime = getHourString(secondDate);
    const formattedTime = `${startTime} - ${endTime}`;

    return [dayString, formattedTime];
  }

  return [getMultipleDateString(firstDate, secondDate)];
};
