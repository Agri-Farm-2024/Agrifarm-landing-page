import {Button, Form, Input, DatePicker, TimePicker} from 'antd';
import React, {useState} from 'react';
import moment from 'moment';
import styles from './AdviseForm.module.css';
import {convertToTimeString, formatDate} from '../../utils';
import {createRequestViewLand} from '../../services/api';
import {toast} from 'react-toastify';

export const AdviseForm = () => {
	const [form] = Form.useForm();

	const handleSubmitForm = (values) => {
		console.log('Form values:', values);
		const dataForm = {
			guest_email: values.email,
			guest_full_name: values.name,
			guest_phone: values.phone,
			time_start: formatDate(values.date) + ' ' + convertToTimeString(values.time),
			description: values.message,
		};

		// Display loading toast
		toast.loading('Đang xử lý...', {autoClose: false});
		createRequestViewLand(dataForm)
			.then((data) => {
				toast.dismiss();
				console.log('createRequestViewLand: ' + data);
				toast.success('Đăng ký thành công, hãy kiểm tra email !!!');

				// Reset the form fields after successful registration
				form.resetFields();
			})
			.catch((error) => {
				toast.dismiss();
				// Update the toast to error
				toast.error('Lỗi thông tin');
			});
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
			form={form} // Ensure the form instance is passed here
			name="adviseForm"
			labelCol={{span: 24}}
			wrapperCol={{span: 22}}
			layout="vertical"
			className={styles.adviseForm}
			onFinish={handleSubmitForm}
			autoComplete="off"
		>
			<Form.Item
				className={styles.formItem}
				label="Tên"
				name="name"
				rules={[{required: true, message: 'Vui lòng không bỏ trống!'}]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				name="email"
				label="Email"
				rules={[
					{required: true, message: 'Vui lòng không bỏ trống!'},
					{type: 'email', message: 'Email không hợp lệ!'},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				name="phone"
				label="Số điện thoại"
				rules={[
					{required: true, message: 'Vui lòng không bỏ trống!'},
					{pattern: /^0[0-9]{9}$/, message: 'Số điện thoại không hợp lệ!'},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				label="Ngày đến"
				name="date"
				rules={[{required: true, message: 'Vui lòng chọn ngày đến!'}]}
			>
				<DatePicker
					style={{width: '100%'}}
					format={'DD-MM-YYYY'}
					disabledDate={disabledDate}
				/>
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				label="Giờ đến"
				name="time"
				rules={[{validator: validateTime}]}
			>
				<TimePicker style={{width: '100%'}} format="HH:mm" minuteStep={30} />
			</Form.Item>

			<Form.Item
				className={styles.formItem}
				style={{width: '100%'}}
				label="Tin nhắn"
				wrapperCol={{span: 23}}
				name="message"
			>
				<Input.TextArea rows={4} />
			</Form.Item>

			<Button style={{height: 50, borderRadius: 24}} type="primary" htmlType="submit">
				Gửi yêu cầu xem đất
			</Button>
		</Form>
	);
};
