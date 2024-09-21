import React from 'react';
import {Card, Button} from 'antd';
import {useNavigate} from 'react-router-dom';

const {Meta} = Card;

const LandItem = ({title, description, image}) => {
	let navigate = useNavigate();

	return (
		<Card
			hoverable
			cover={<img alt={title} src={image} style={{width: '100%', height: 260}} />}
			style={{width: '100%'}}
		>
			<Meta title={title} description={description} style={{textAlign: 'left'}} />
			<Button
				onClick={() => navigate('/land-detail/1')}
				type="primary"
				style={{marginTop: '30px', minWidth: '200px'}}
				size="large"
			>
				Chi tiết
			</Button>
		</Card>
	);
};

export default LandItem;
