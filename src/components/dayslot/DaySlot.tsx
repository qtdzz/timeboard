import React from 'react';

import styles from './DaySlot.module.css';

type DaySlotProps = {
  month: string;
  day: string;
  fullDate: string;
};
const DaySlot = (props: DaySlotProps) => {
  return (
    <div className={styles.dayslot}>
      <div className={styles.month}>{props.month}</div>
      <div className={styles.day}>{props.day}</div>
    </div>
  );
};

export default DaySlot;
