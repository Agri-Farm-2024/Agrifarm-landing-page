import {Button, Form, Input} from 'antd';
import React from 'react';
import styles from './AdviseForm.module.css';

export const AdviseForm = () => {
	const handleSubmitForm = () => {};

	return (
		<Form
			name="adviseForm"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 22,
			}}
			layout="vertical"
			style={{}}
			className={styles.adviseForm}
			onFinish={handleSubmitForm}
			autoComplete="off"
		>
			<Form.Item
				className={styles.formItem}
				label="Tên"
				name="name"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				className={styles.formItem}
				name="email"
				label="Email"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
					{
						type: 'email',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				name="phone"
				label="Số điện thoại"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
					{
						pattern: /^0[0-9]{9}$/,
						message: 'Số điện thoại không hợp lệ!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				label="Dịch vụ"
				name="service"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				style={{width: '100%'}}
				label="Tin nhắn"
				wrapperCol={{
					span: 23,
				}}
				name="message"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Button type="primary" htmlType="submit">
				Nhận tư vấn
			</Button>
		</Form>
	);
};
