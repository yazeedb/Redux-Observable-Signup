import { fromPromise } from 'rxjs/observable/fromPromise';
import { pipe } from 'ramda';

export default pipe(
	fetch,
	fromPromise
);
