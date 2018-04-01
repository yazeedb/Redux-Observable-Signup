import autodux from 'autodux';

export const { actions, initial, reducer } = autodux({
	slice: 'signup',
	initial: {
		username: '',
		password: '',
		loading: false,
		success: false,
		id: null
	},
	actions: {
		sendSignupInfo: (state, { username, password }) => ({
			username,
			password,
			loading: true
		}),
		signupSuccess: (state, id) => ({
			...initial,
			success: true,
			id
		})
	}
});
