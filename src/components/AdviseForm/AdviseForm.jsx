import {Button, Form, Input, DatePicker, TimePicker, message} from 'antd';
import React from 'react';
import moment from 'moment';
import styles from './AdviseForm.module.css';

export const AdviseForm = () => {
	const handleSubmitForm = (values) => {
		console.log('Form values:', values);
	};

	const disabledDate = (current) => {
		// Can only select dates from tomorrow onward
		return current && current < moment().endOf('day');
	};

	const validateTime = (_, value) => {
		if (!value) {
			return Promise.reject('Vui lòng chọn giờ đến!');
		}

		const hour = value.hour();
		if (hour < 8 || hour >= 17) {
			return Promise.reject('Giờ đến phải từ 8:00 sáng đến 5:00 chiều!');
		}

		return Promise.resolve();
	};

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
						message: 'Email không hợp lệ!',
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
				label="Ngày đến"
				name="date"
				rules={[
					{
						required: true,
						message: 'Vui lòng chọn ngày đến!',
					},
				]}
			>
				<DatePicker style={{width: '100%'}} disabledDate={disabledDate} />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				label="Giờ đến"
				name="time"
				rules={[
					{
						required: true,
						message: 'Vui lòng chọn giờ đến!',
					},
					{
						validator: validateTime,
					},
				]}
			>
				<TimePicker style={{width: '100%'}} format="HH:mm" />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				style={{width: '100%'}}
				label="Tin nhắn"
				wrapperCol={{
					span: 23,
				}}
				name="message"
			>
				<Input.TextArea rows={4} />
			</Form.Item>

			<Button type="primary" htmlType="submit">
				Gửi yêu cầu xem đất
			</Button>
		</Form>
	);
};
