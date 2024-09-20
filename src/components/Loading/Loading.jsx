import {Spin} from 'antd';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Loading({size}) {
	return (
		<div>
			{' '}
			<Spin size={size} />
		</div>
	);
}
