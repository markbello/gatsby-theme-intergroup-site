import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../core/reducer';
import ContentContainer from './ContentContainer';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		composeWithDevTools()
	)
);

const DataLayer = (
	{
		city,
		cmsGroupId,
		country,
		fellowshipAcronym,
		fellowshipLongName,
		groupDescription,
		name,
		state,
	}
) => {

	return (
		<Provider store={store}>
			<ContentContainer
				city={city}
				cmsGroupId={cmsGroupId}
				country={country}
				fellowshipAcronym={fellowshipAcronym}
				fellowshipLongName={fellowshipLongName}
				groupDescription={groupDescription}
				name={name}
				state={state}
			/>
		</Provider>
	);
}

export default DataLayer;
