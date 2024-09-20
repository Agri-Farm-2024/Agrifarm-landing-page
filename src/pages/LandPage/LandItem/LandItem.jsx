import React from 'react';
import {Card, Button} from 'antd';

const {Meta} = Card;

const LandItem = ({title, description, image}) => {
	return (
		<Card
			hoverable
			cover={<img alt={title} src={image} style={{width: '100%', height: 260}} />}
			style={{width: '100%'}}
		>
			<Meta title={title} description={description} style={{textAlign: 'left'}} />
			<Button type="primary" style={{marginTop: '30px', minWidth: '200px'}} size="large">
				Chi tiết
			</Button>
		</Card>
	);
};

export default LandItem;
