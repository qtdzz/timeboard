import React from 'react';

import moment from 'moment-timezone';

import TimeSlot from '../timeslot/TimeSlot';
import styles from './Timeline.module.css';

type TimelineProps = {
  startDateTime: string;
  timeZone: string;
};
const Timeline = (props: TimelineProps) => {
  const currentDate = moment.tz(props.startDateTime, props.timeZone);
  const timeslots = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 24; index++) {
    const hour = currentDate.hour();
    timeslots.push(
      <TimeSlot
        key={index}
        value={currentDate.format('H')}
        isStart={hour === 0}
        isEnd={hour === 23}
      ></TimeSlot>
    );
    currentDate.add(1, 'hour');
  }
  return <div className={styles.timeline}>{timeslots}</div>;
};

export default Timeline;
