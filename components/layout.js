import * as React from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';
import './layout.css';

const Layout = ({ children }) => {
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}>
				<main>{children}</main>
			</div>
		</MantineProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
