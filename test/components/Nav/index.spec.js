import Nav from '/components/Nav';
import { mountWrapper } from '/wrapper';

const getWrapper = mountWrapper(Nav);

describe('Nav', () => {
	it('should display children', () => {
		const wrapper = getWrapper({ children: 'Hello World' });

		expect(wrapper.prop('children')).toBe('Hello World');
	});
});
