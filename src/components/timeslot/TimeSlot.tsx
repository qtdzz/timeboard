import React from 'react';

import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  value: string;
  isNow: boolean;
  isPast: boolean;
};
const TimeSlot = (props: TimeSlotProps) => {
  const styleList = [styles.timeslot];
  const lineStyleList = [styles.line];
  const parentStyleList = [styles.slotParent];
  if (props.isNow) {
    styleList.push(styles.now);
    lineStyleList.push(styles.now);
  }
  if (props.isPast) {
    parentStyleList.push(styles.past);
  }
  let content = props.value;
  let subContent = '';
  if (props.value.includes(':')) {
    const splittedContent = content.split(':');
    content = splittedContent[0]!;
    subContent = splittedContent[1]!;
  }
  return (
    <div className={parentStyleList.join(' ')}>
      <div className={styleList.join(' ')}>
        {content}
        <span className={styles.subContent}>{subContent}</span>
      </div>
      <div className={lineStyleList.join(' ')}></div>
    </div>
  );
};
export default TimeSlot;
