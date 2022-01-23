import React from 'react';

import moment from 'moment';

import DaySlot from '../dayslot/DaySlot';
import TimeSlot from '../timeslot/TimeSlot';
import styles from './DaySegment.module.css';

type DaySegmentProps = {
  startEpoch: number;
  timeZone: string;
  isFirstSegment: boolean;
};
const DaySegment = (props: DaySegmentProps) => {
  let currentDate = moment.tz(props.startEpoch, props.timeZone);
  const dayslotProps = {
    month: currentDate.format('MMM'),
    day: currentDate.format('DD'),
    fullDate: currentDate.format('dddd, MMMM Do, YYYY'),
  };
  const timeslots = [];
  const timeFormat = 'HH';
  const offsetRemainder = currentDate.utcOffset() % 60;
  const { isFirstSegment } = props;
  if (offsetRemainder !== 0 && isFirstSegment) {
    timeslots.push(
      <TimeSlot
        key={-1}
        value={currentDate.format(timeFormat)}
        isStart={currentDate.hour() === 0}
        isEnd={currentDate.hour() === 23}
        isHalf={offsetRemainder % 30 === 0}
        isThreeQuarter={offsetRemainder % 45 === 0}
      ></TimeSlot>
    );
    currentDate.add(1, 'hour');
  }
  // eslint-disable-next-line no-plusplus
  for (let index = currentDate.hour(); index < 24; index++) {
    timeslots.push(
      <TimeSlot
        key={index}
        value={currentDate.format(timeFormat)}
        isStart={index === 0}
        isEnd={index === 23}
      ></TimeSlot>
    );
    currentDate = currentDate.add(1, 'hour');
  }
  return (
    <div className={styles.parent}>
      <div>
        <DaySlot
          month={dayslotProps.month.toString()}
          day={dayslotProps.day.toString()}
          fullDate={dayslotProps.fullDate}
        ></DaySlot>
      </div>
      <div className={styles.timeline}>{timeslots}</div>
    </div>
  );
};

export default DaySegment;
