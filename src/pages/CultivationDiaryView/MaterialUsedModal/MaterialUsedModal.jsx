import React from 'react';
import styles from './MaterialUsedModal.module.css';
import {Image, Modal} from 'antd';
import {capitalizeFirstLetter, convertImageURL} from '../../../utils';

export const MaterialUsedModal = ({isModalOpen, handleModalClose, materialList}) => {
	return (
		<Modal
			title={<span style={{fontSize: '1.5rem'}}>Danh sách vật tư sử dụng</span>}
			open={isModalOpen}
			onCancel={() => {
				handleModalClose();
			}}
			width={1000}
			centered
			cancelText="Đóng"
			onOk={() => {}}
			okButtonProps={{style: {display: 'none'}}}
		>
			<div className={styles.modalContainer}>
				{(!materialList || !materialList.length > 0) && (
					<p className={styles.emptyText}>Không có vật tư</p>
				)}
				{materialList &&
					materialList.length > 0 &&
					materialList.map((stage, stageIndex) => (
						<div key={`Stage ${stageIndex}`} className={styles.stageContainer}>
							<p className={styles.stageTitle}>
								Giai đoạn {stageIndex + 1}: {stage?.stage_title}
							</p>
							{(!stage?.process_technical_specific_stage_material ||
								!stage?.process_technical_specific_stage_material.length > 0) && (
								<p className={styles.emptyText}>Không có vật tư</p>
							)}
							{stage?.process_technical_specific_stage_material &&
								stage?.process_technical_specific_stage_material.length > 0 &&
								stage?.process_technical_specific_stage_material.map(
									(material, materialIndex) => (
										<div className={styles.itemContainer}>
											<Image
												width={100}
												height={100}
												src={convertImageURL(
													material?.materialSpecific?.image_material
												)}
												className={styles.materialImg}
											></Image>
											<div className={styles.infoContainer}>
												<p className={styles.materialName}>
													{capitalizeFirstLetter(
														material?.materialSpecific?.name
													)}
												</p>
												<p className={styles.materialQuantity}>
													Số lượng: {material?.quantity}
												</p>
												{stage?.is_get_material && (
													<p className={styles.isDelivered}>Đã giao</p>
												)}
											</div>
										</div>
									)
								)}
						</div>
					))}
			</div>
		</Modal>
	);
};
