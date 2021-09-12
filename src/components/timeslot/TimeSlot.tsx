import React from 'react';

import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  value: string;
  isStart: boolean;
  isEnd: boolean;
};
const TimeSlot = (props: TimeSlotProps) => {
  let s = styles.timeslot;
  if (props.isStart) {
    s += ` ${styles.start}`;
  }
  if (props.isEnd) {
    s += ` ${styles.end}`;
  }
  return <div className={s}>{props.value}</div>;
};

export default TimeSlot;
