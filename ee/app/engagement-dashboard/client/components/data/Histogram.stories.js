import { Box, Flex, Margins } from '@rocket.chat/fuselage';
import React from 'react';

import { Histogram } from './Histogram';

export default {
	title: 'views/admin/enterprise/engagement/data/Histogram',
	component: Histogram,
	decorators: [(fn) => <Margins all='x16'>
		<Flex.Container>
			<Box children={fn()} style={{ height: 240 }} />
		</Flex.Container>
	</Margins>],
};

export const _default = () => <Histogram />;