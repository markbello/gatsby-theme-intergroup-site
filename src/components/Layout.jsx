import React from 'react';
import PropTypes from 'prop-types';
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

Layout.displayName = 'Layout';

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
