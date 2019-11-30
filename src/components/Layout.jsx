import React from 'react';
import {
	Layout as ThemeLayout,
	Header,
	Main,
	Container,
} from 'theme-ui';

const Layout = ({ name, children }) => (
	<ThemeLayout>
		<Header>
			{name}
		</Header>
		<Main>
			<Container>
				{children}
			</Container>
		</Main>
	</ThemeLayout>
);


export default Layout;