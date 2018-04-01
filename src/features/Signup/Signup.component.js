import React from 'react';
import './Signup.scss';

const Signup = ({
	handleSubmit,
	loading,
	username,
	password,
	updateUsername,
	updatePassword,
	success,
	id
}) => (
	<form onSubmit={ handleSubmit }>
		<h3>Redux-Observable Form</h3>

		<p className="text-success">
			{ success && `Success! Your id is ${id}`}
		</p>

		<input
			placeholder="Username"
			className="form-control"
			value={ username }
			onChange={ updateUsername }
		/>

		<input
			type="password"
			placeholder="Password"
			className="form-control"
			value={ password }
			onChange={ updatePassword }
		/>

		<button className="btn btn-primary">
			{ loading ? 'Loading...' : 'Sign up'}
		</button>
	</form>
);

export default Signup;
