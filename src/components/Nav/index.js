import React from 'react';
import PropTypes from 'prop-types';
import { pure, setPropTypes } from 'recompose';
import { pipe } from 'ramda';

const Nav = ({ children }) => (
	<nav>
		{ children }
	</nav>
);

export default pipe(
	pure,
	setPropTypes({
		children: PropTypes.string
	})
)(Nav);
