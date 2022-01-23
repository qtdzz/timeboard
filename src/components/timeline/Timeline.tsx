import React from 'react';

import moment from 'moment';

import DaySegment from '../daysegment/DaySegment';
import styles from './Timeline.module.css';

type TimelineProps = {
  startEpoch: number;
  timeZone: string;
};
const Timeline = (props: TimelineProps) => {
  const daySegments = [];
  const currentDate = moment.tz(props.startEpoch, props.timeZone);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 36; i++) {
    if (i === 0 || currentDate.hour() === 0) {
      daySegments.push(
        <DaySegment
          key={i}
          startEpoch={currentDate.valueOf()}
          timeZone={props.timeZone}
          isFirstSegment={i === 0}
        ></DaySegment>
      );
    }
    currentDate.add(1, 'hour');
  }
  return (
    <div className={styles.parent}>
      <div className={styles.segmentContainer}>{daySegments}</div>
    </div>
  );
};

export default Timeline;
