import React from 'react';
import PropTypes from 'prop-types';

const StaticContent = ({
	city,
	country,
	fellowshipAcronym,
	fellowshipLongName,
	groupDescription,
	name,
	state,
}) => (
	<div>
		<section id="static-content">
			<h1>{name}</h1>
			<div>
				<p>
					<strong>
						{`${fellowshipLongName} (${fellowshipAcronym})`}
					</strong>
					<br />
					<em>
						{`${city}, ${state} ${country}`}
					</em>
				</p>
			</div>
			<div>
				<p>{groupDescription}</p>
			</div>
    </section>
	</div>
);

StaticContent.propTypes = {
	city: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	fellowshipAcronym: PropTypes.string.isRequired,
	fellowshipLongName: PropTypes.string.isRequired,
	groupDescription: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
};

export default StaticContent;
