import * as React from 'react';
import { shallow } from 'enzyme';

import { Section } from '.';

describe('Section component', () => {
	it('Should render the Section component', () => {
		const wrapper = shallow(
			<Section id="section" className=" test" hasButton={true} hasShell={true}>
				<p>Test</p>
				<p>Test</p>
			</Section>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Section component without a button', () => {
		const wrapper = shallow(
			<Section id="section" className=" test" hasButton={false} hasShell={true}>
				<p>Test</p>
				<p>Test</p>
			</Section>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Section component without a shell', () => {
		const wrapper = shallow(
			<Section id="section" className=" test" hasButton={true} hasShell={false}>
				<p>Test</p>
				<p>Test</p>
			</Section>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Section component without a button and a shell', () => {
		const wrapper = shallow(
			<Section id="section" className=" test" hasButton={false} hasShell={false}>
				<p>Test</p>
				<p>Test</p>
			</Section>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
