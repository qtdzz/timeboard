import React from 'react';

import moment from 'moment';

import DaySegment from '../daysegment/DaySegment';
import styles from './Timeline.module.css';

type TimelineProps = {
  startEpoch: number;
  timeZone: string;
  currentUTCTime: moment.Moment;
  mouseLeftPosition: number;
};
const Timeline = (props: TimelineProps) => {
  const daySegments = [];
  const currentDate = moment.tz(props.startEpoch, props.timeZone);
  const maxEpoch = currentDate.valueOf() + 30 * 60 * 60 * 1000;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 36 && currentDate.valueOf() < maxEpoch; i++) {
    if (i === 0 || currentDate.hour() === 0) {
      daySegments.push(
        <DaySegment
          key={i}
          startEpoch={currentDate.valueOf()}
          timeZone={props.timeZone}
          maxEpoch={maxEpoch}
          currentUTCTime={props.currentUTCTime}
          mouseLeftPosition={props.mouseLeftPosition}
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
