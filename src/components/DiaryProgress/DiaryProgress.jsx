import React, {useEffect, useState} from 'react';
import styles from './DiaryProgress.module.css';
import {Image} from 'antd';
import {convertImageURL, formatDateObj} from '../../utils';

export const DiaryProgress = ({diaryProgress}) => {
	const [diaryRender, setDiaryRender] = useState(null);
	useEffect(() => {
		if (diaryProgress) {
			//filter data to show diary progress
			const newArr = diaryProgress?.process_technical_specific_stage
				.map((stage) => {
					if (
						stage &&
						stage?.process_technical_specific_stage_content &&
						stage?.process_technical_specific_stage_content.length > 0
					) {
						return stage?.process_technical_specific_stage_content.map((content) => {
							if (content?.dinary_stage) {
								return {
									stageTitle: stage.stage_title,
									dayFrom: content.time_start,
									dayTo: content.time_end,
									diaryDate: content?.dinary_stage?.created_at,
									diaryNote: content?.dinary_stage?.content,
									actionQuality: content?.dinary_stage?.quality_report,
									actionTitle: content.title,
									qualityReport: content?.dinary_stage?.quality_report,
									isDone: true,
									process_technical_specific_stage_content_id:
										content.process_technical_specific_stage_content_id,
									imageReport: content?.dinary_stage?.dinaries_link,
								};
							}
						});
					}
				})
				.flat()
				.filter((item) => item != null);
			console.log('new Diary', JSON.stringify(newArr));
			setDiaryRender([...newArr]);
		}
	}, []);
	return (
		<>
			<div className={`${styles.progressItemContainer} ${styles.firstPoint}`}>
				<div className={styles.diaryTime}></div>
				<div className={styles.progress}>
					<div className={`${styles.progressPoint}  ${styles.doneBackGrColor}`}></div>
				</div>
				<div className={styles.diaryAction}></div>
			</div>
			{diaryRender &&
				diaryRender.length > 0 &&
				diaryRender.map((progressItem, index) => (
					<div key={index} className={styles.progressItemContainer}>
						<div className={styles.diaryTime}>
							<p className={styles.stage}>{progressItem.stageTitle}</p>
							<p className={styles.dayTime}>
								{formatDateObj(progressItem.dayFrom, 2)}
							</p>
							<p className={styles.dayTime}>{formatDateObj(progressItem.dayTo, 2)}</p>
						</div>
						<div className={styles.progress}>
							<div
								className={`${styles.progressbar} ${progressItem.isDone && styles.doneBackGrColor}`}
							></div>
							<div
								className={`${styles.progressPoint} ${progressItem.isDone && styles.doneBackGrColor}`}
							></div>
						</div>
						<div className={styles.diaryAction}>
							<div className={styles.actionWrapper}>
								<p className={styles.actionTitle}>{progressItem.actionTitle}</p>
								<p className={styles.actionDescription}>{progressItem.diaryNote}</p>
								<p className={styles.quality}>
									Chất lượng hoạt động canh tác: {progressItem.qualityReport}%
								</p>
								{progressItem.isDone && progressItem.imageReport.length > 0 && (
									<div className={styles.imageReport}>
										{progressItem.imageReport.map((image, index1) => (
											<Image
												className={styles.imageReportItem}
												key={`Action${index}Img${index1}`}
												src={convertImageURL(image?.url_link)}
												width={100}
												height={80}
											/>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				))}
		</>
	);
};
