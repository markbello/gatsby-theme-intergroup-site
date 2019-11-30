import React from "react";

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
)

export default StaticContent;