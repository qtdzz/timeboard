import React from 'react';

import styles from './DaySlot.module.css';

type DaySlotProps = {
  month: string;
  day: string;
  isToday: boolean;
  fullDate: string;
};
const DaySlot = (props: DaySlotProps) => {
  const styleList = [styles.dayslot];
  if (props.isToday) styleList.push(styles.now);
  return (
    <div className={styleList.join(' ')}>
      <div className={styles.month}>{props.month}</div>
      <div className={styles.day}>{props.day}</div>
    </div>
  );
};

export default DaySlot;
