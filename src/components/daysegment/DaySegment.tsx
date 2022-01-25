import React, { useEffect, useRef, useState } from 'react';

import moment from 'moment';

import DaySlot from '../dayslot/DaySlot';
import TimeSlot from '../timeslot/TimeSlot';
import styles from './DaySegment.module.css';

type DaySegmentProps = {
  startEpoch: number;
  timeZone: string;
  maxEpoch: number;
  currentUTCTime: moment.Moment;
  mouseLeftPosition: number;
};
const DaySegment = (props: DaySegmentProps) => {
  let processDate = moment.tz(props.startEpoch, props.timeZone);
  const now = props.currentUTCTime.clone().tz(props.timeZone);

  const dayslotProps = {
    month: processDate.format('MMM'),
    day: processDate.format('DD'),
    fullDate: processDate.format('dddd, MMMM Do, YYYY'),
    isToday: now.dayOfYear() === processDate.dayOfYear(),
  };
  const timeslots = [];
  const minute = processDate.minute();
  const timeFormat = minute === 0 ? 'HH' : 'HH:mm';
  const indicatorTopRef = useRef(null);
  const [topIndicator, setTopIndicator] = useState(0);
  useEffect(() => {
    if (indicatorTopRef.current) {
      const { top } = (
        indicatorTopRef.current as HTMLElement
      ).getBoundingClientRect();
      setTopIndicator(top);
    }
  }, [indicatorTopRef]);
  for (
    let index = processDate.hour();
    index < 24 && processDate.valueOf() < props.maxEpoch;
    // eslint-disable-next-line no-plusplus
    index++
  ) {
    const isNow =
      now.valueOf() >= processDate.valueOf() &&
      now.valueOf() < processDate.valueOf() + 60 * 60 * 1000;
    const isPast = !isNow && now.valueOf() > processDate.valueOf();

    timeslots.push(
      <TimeSlot
        key={index}
        value={processDate.format(timeFormat)}
        isNow={isNow}
        isPast={isPast}
        mouseLeftPosition={props.mouseLeftPosition}
        epoch={processDate.valueOf()}
        timeZone={props.timeZone}
        topIndicatorPosition={topIndicator}
      ></TimeSlot>
    );
    processDate = processDate.add(1, 'hour');
  }
  return (
    <div className={styles.parent}>
      <div ref={indicatorTopRef}>
        <DaySlot
          month={dayslotProps.month.toString()}
          day={dayslotProps.day.toString()}
          fullDate={dayslotProps.fullDate}
          isToday={dayslotProps.isToday}
        ></DaySlot>
      </div>
      <div className={styles.timeline}>{timeslots}</div>
    </div>
  );
};

export default DaySegment;
