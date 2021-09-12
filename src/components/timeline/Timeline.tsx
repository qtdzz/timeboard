import React from 'react';

import TimeSlot from '../timeslot/TimeSlot';
import styles from './Timeline.module.css';

type TimelineProps = {
  timezone: string;
  isBased: boolean;
};
const Timeline = (props: TimelineProps) => {
  const timeslots = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 24; index++) {
    timeslots.push(
      <TimeSlot
        key={index}
        value={index.toString()}
        isStart={index === 0}
        isEnd={index === 23}
      ></TimeSlot>
    );
  }
  return (
    <div className={styles.timeline}>
      Timezone: {props.timezone}
      {timeslots}
    </div>
  );
};

export default Timeline;
