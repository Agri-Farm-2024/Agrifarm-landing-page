import {Button, Form, Input, Checkbox} from 'antd';
import React, {useState} from 'react';
import styles from './LandLeaseForm.module.css';
import {toast} from 'react-toastify';

export const LandLeaseForm = () => {
	// Loading state to manage submission status
	const [loading, setLoading] = useState(false);

	// Form submission handler
	const handleSubmitForm = (values) => {
		console.log('Form Submitted: ', values);
		setLoading(true); // Start loading when the form is submitted

		// Simulate a form submission (replace with actual submission logic)
		setTimeout(() => {
			setLoading(false); // Stop loading after submission
			toast.success('Gửi đơn thành công');
			console.log('Form submission completed');
		}, 2000); // Simulating a 2-second delay
	};

	return (
		<Form
			name="landLeaseForm"
			labelCol={{span: 24}}
			wrapperCol={{span: 22}}
			layout="vertical"
			className={styles.landLeaseForm}
			onFinish={handleSubmitForm}
			autoComplete="off"
		>
			<Form.Item
				className={styles.formItem}
				style={{width: '100%'}}
				label="Họ và tên"
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
				style={{width: '100%'}}
				label="Số điện thoại"
				name="phone"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
					{
						pattern: /^[0-9]{9,11}$/,
						message: 'Vui lòng nhập số điện thoại hợp lệ!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				style={{width: '100%'}}
				label="Địa chỉ"
				name="address"
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
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						message: 'Vui lòng không bỏ trống!',
					},
					{
						type: 'email',
						message: 'Vui lòng nhập email hợp lệ!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				style={{width: '100%'}}
				name="confirmation"
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) =>
							value
								? Promise.resolve()
								: Promise.reject('Vui lòng xác nhận thông tin!'),
					},
				]}
			>
				<Checkbox>Tôi xác nhận rằng các thông tin đã cung cấp là chính xác</Checkbox>
			</Form.Item>

			<Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
				{loading ? 'Đang đăng ký...' : 'Đăng ký'}
			</Button>
		</Form>
	);
};
