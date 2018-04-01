import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { prop } from 'ramda';
import getTargetValue from '/helpers/getTargetValue';
import SignupComponent from './Signup.component';
import { actions } from './Signup.duck';

const Signup = ({
	handleSubmit,
	loading,
	updateUsername,
	updatePassword,
	success,
	id
}) => (
	<SignupComponent
		handleSubmit={ handleSubmit }
		loading={ loading }
		updateUsername={ updateUsername }
		updatePassword={ updatePassword }
		success={ success }
		id={ id }
	/>
);

const enhanceComponent = compose(
	connect(prop('signupReducer'), actions),
	withHandlers({
		handleSubmit: ({
			username,
			password,
			sendSignupInfo
		}) => (event) => {
			event.preventDefault();

			sendSignupInfo({ username, password });
		},
		updateUsername: ({ setUsername }) => compose(
			setUsername,
			getTargetValue
		),
		updatePassword: ({ setPassword }) => compose(
			setPassword,
			getTargetValue
		)
	})
);

export default enhanceComponent(Signup);
