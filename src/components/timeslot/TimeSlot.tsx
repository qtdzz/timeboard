import React from 'react';

import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  value: string;
  isStart: boolean;
  isEnd: boolean;
  isHalf?: boolean;
  isThreeQuarter?: boolean;
};
const TimeSlot = (props: TimeSlotProps) => {
  const styleList = [styles.timeslot];
  if (props.isStart) {
    styleList.push(styles.start);
  } else if (props.isEnd) {
    styleList.push(styles.end);
  }
  if (props.isHalf) {
    styleList.push(styles.half);
  } else if (props.isThreeQuarter) {
    styleList.push(styles.threequarter);
  }
  return <div className={styleList.join(' ')}>{props.value}</div>;
};

export default TimeSlot;
