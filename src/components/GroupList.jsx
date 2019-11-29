import React from "react";
import { Link } from "gatsby";

const GroupList = ({ groups }) => {
	return (
		<>
			<h2>All Groups</h2>
			<ul>
				{groups.map(group => (
					<li key={group.id}>
						<strong>
							<Link to={group.slug}>{group.name}</Link>
						</strong>
					</li>
				))}
			</ul>
		</>
	);
}

export default GroupList;