import React, { Component } from 'react';
import StaticContent from './StaticContent';
import Layout from './Layout';

class ContentContainer extends Component {
	componentDidMount() {
		const { cmsGroupId } = this.props;

		//@TODO abstract this and implement a data store
		fetch(`http://18.188.185.59:1337/groups/${cmsGroupId}`)
			.then(res => res.json())
			.then(data => console.log({ data }));
	}

	render() {
		const {
			city,
			cmsGroupId,
			country,
			fellowshipAcronym,
			fellowshipLongName,
			groupDescription,
			name,
			state,
		} = this.props;

		return (
			<Layout name={name}>
				<StaticContent
					city={city}
					cmsGroupId={cmsGroupId}
					country={country}
					fellowshipAcronym={fellowshipAcronym}
					fellowshipLongName={fellowshipLongName}
					groupDescription={groupDescription}
					name={name}
					state={state}
				/>
				{/* @TODO add dynamic content */}
			</Layout>
		);
	}
}

export default ContentContainer;