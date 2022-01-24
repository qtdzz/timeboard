import React from 'react';

import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  value: string;
  isNow: boolean;
};
const TimeSlot = (props: TimeSlotProps) => {
  const styleList = [styles.timeslot];
  if (props.isNow) {
    styleList.push(styles.now);
  }
  let content = props.value;
  let subContent = '';
  if (props.value.includes(':')) {
    const splittedContent = content.split(':');
    content = splittedContent[0]!;
    subContent = splittedContent[1]!;
  }
  return (
    <div className={styles.slotParent}>
      <div className={styleList.join(' ')}>
        {content}
        <span className={styles.subContent}>{subContent}</span>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
export default TimeSlot;
