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
      <div className={styles.month} data-tooltip-target="tooltip-default">
        {props.month}
      </div>
      <div className={styles.day}>{props.day}</div>
      <div
        id="tooltip-default"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {props.fullDate}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default DaySlot;
