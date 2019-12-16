import moment from 'moment-timezone';
import {
  formatDates,
  getHourString,
  getMultipleDateString,
  getSameDayString,
  getSingleDateString,
  isSameDay,
} from '../../../src/core/utils/timeFormatting';

describe('timeFormatting utils', () => {
  describe('isSameDay', () => {
    it('is true for same day at different times', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const secondTime = moment('2019-12-15T22:17:08.631Z').tz('America/New_York');

      expect(isSameDay(firstTime, secondTime)).toBe(true);
    });
    it('is false for different day at different times', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const secondTime = moment('2020-01-15T22:17:08.631Z').tz('America/New_York');

      expect(isSameDay(firstTime, secondTime)).toBe(false);
    });
  });
  describe('getSingleDateString', () => {
    it('returns a formatted date', () => {
      const expected = 'Monday, December 16th, 2019, 8:01 pm';

      expect(getSingleDateString('2019-12-17T01:01:00.000Z')).toEqual(expected);
    });
  });
  describe('getMultipleDateString', () => {
    it('concatenates two formatted date strings', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const secondTime = moment('2019-12-16T22:17:08.631Z').tz('America/New_York');
      const expected = 'Sunday, December 15th, 2019, 4:35 pm - Monday, December 16th, 2019, 5:17 pm';
      expect(getMultipleDateString(firstTime, secondTime)).toEqual(expected);
    });
  });
  describe('getSameDayString', () => {
    it('returns a formatted string without the hour', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const expected = 'Sunday, December 15th, 2019';
      expect(getSameDayString(firstTime)).toEqual(expected);
    });
  });
  describe('getHourString', () => {
    it('returns only the hour from a date string', () => {
      const time = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const expected = '4:35 pm';

      expect(getHourString(time)).toEqual(expected);
    });
  });
  describe('formatDates', () => {
    it('returns a single date string if only one date provided', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');

      expect(formatDates(firstTime)).toEqual(['Sunday, December 15th, 2019, 4:35 pm']);
    });
    it('returns a concatenated, full date string when the dates are for different days', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const secondTime = moment('2019-12-16T22:17:08.631Z').tz('America/New_York');
      const expected = ['Sunday, December 15th, 2019, 4:35 pm - Monday, December 16th, 2019, 5:17 pm'];
      expect(formatDates(firstTime, secondTime)).toEqual(expected);
    });
    it('returns a concatenated date string showing only end hour if endDate is on the same day', () => {
      const firstTime = moment('2019-12-15T21:35:49.828Z').tz('America/New_York');
      const secondTime = moment('2019-12-15T22:17:08.631Z').tz('America/New_York');
      const expected = ['Sunday, December 15th, 2019', '4:35 pm - 5:17 pm'];
      expect(formatDates(firstTime, secondTime)).toEqual(expected);
    });
  });
});
