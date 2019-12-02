import React from 'react';
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

// @TODO add a close icon and arbitrate expired vs non-expired alerts
const Alert = ({
	content,
	sentiment,
}) => {
	const color = colors[sentiment];

	return (
		<AlertContainer color={color}>
			{content}
		</AlertContainer>
	);
};

export default Alert;
