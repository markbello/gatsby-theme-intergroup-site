import React from 'react';
import PropTypes from 'prop-types';
import Styled from '@emotion/styled';
import { theme } from '../theme';

const { colors } = theme;

const AlertContainer = Styled.div`
	border: 2px solid;
	border-color: ${({ color }) => color};
	padding: 16px;
	margin: 8px;
	color: ${({ color }) => color};
`;

const Alert = ({ content }) => {
  const { neutral } = colors;

  return (
    <AlertContainer color={neutral}>
      {content}
    </AlertContainer>
  );
};

Alert.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Alert;
