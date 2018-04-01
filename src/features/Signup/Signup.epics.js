import { ofType } from 'redux-observable';
import { catchError, delay, map, pluck, switchMap } from 'rxjs/operators';
import { actions } from './Signup.duck';

const { sendSignupInfo, signupSuccess } = actions;
const url = 'https://jsonplaceholder.typicode.com/users';

export const sendSignupInfoEpic = (action$, store, { fetch$ }) => action$.pipe(
	ofType(sendSignupInfo.type),
	delay(2000),
	switchMap(({ username, password }) =>
		fetch$({
			method: 'POST',
			url,
			username,
			password
		}).pipe(
			pluck('response'),
			pluck('id'),
			catchError((error) => console.error('Problem!', error.message))
		)
	),
	map(signupSuccess)
);
