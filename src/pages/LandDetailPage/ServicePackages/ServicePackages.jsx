import React, {useState} from 'react';
import {Collapse, Button, Checkbox} from 'antd';
import {CheckOutlined, RightOutlined, DownOutlined} from '@ant-design/icons';

const {Panel} = Collapse;

const ServicePackages = () => {
	const [selectedPackage, setSelectedPackage] = useState('2');

	const handleSelect = (key) => {
		console.log(key[0]);
		setSelectedPackage(key);
	};

	return (
		<div style={{marginTop: '50px'}}>
			<h2 style={{fontSize: 28}}>Các gói dịch vụ của AgriFarm hỗ trợ cho việc canh tác</h2>
			<Collapse
				style={{background: '#f8f7f0'}}
				activeKey={selectedPackage}
				onChange={handleSelect}
				accordion
				defaultActiveKey={'2'}
			>
				<Panel
					header="Gói 1: Canh Tác VietGAP + Vật Tư"
					key="1"
					extra={
						selectedPackage == 1 ? (
							<Button type="primary" shape="default" icon={<DownOutlined />} />
						) : (
							<Button type="primary" shape="default" icon={<RightOutlined />} />
						)
					}
				>
					<p>Chi tiết về gói 1...</p>
				</Panel>
				<Panel
					header="Gói 2: Canh Tác VietGAP + Vật Tư + Thu Mua Sản Phẩm"
					key="2"
					extra={
						selectedPackage == 2 ? (
							<Button type="primary" shape="default" icon={<DownOutlined />} />
						) : (
							<Button type="primary" shape="default" icon={<RightOutlined />} />
						)
					}
				>
					<p>
						Kết hợp quy trình canh tác VietGAP, vật tư cần thiết, và đảm bảo thu mua sản
						phẩm sau thu hoạch.
					</p>
				</Panel>
				<Panel
					header="Gói 3: Canh Tác VietGAP + Vật Tư + Thu Mua Sản Phẩm + Tư Vấn Hỗ Trợ"
					key="3"
					extra={
						selectedPackage == 3 ? (
							<Button type="primary" shape="default" icon={<DownOutlined />} />
						) : (
							<Button type="primary" shape="default" icon={<RightOutlined />} />
						)
					}
				>
					<p>Chi tiết về gói 3...</p>
				</Panel>
			</Collapse>
		</div>
	);
};

export default ServicePackages;
